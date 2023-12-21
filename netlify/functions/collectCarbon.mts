import { MongoClient } from 'mongodb';
import { Handler } from '@netlify/functions';
import { CarbonData, CarbonResult } from '../../src/shared/types/docs';
const { default: axios } = require('axios');
const jsdom = require('jsdom');

async function getCarbon(url): Promise<CarbonResult> {
  const api = 'https://api.websitecarbon.com/b?url=';
  try {
    const res = await axios.get(api + url);
    return {
      url,
      carbon: res.data.c,
      percent: res.data.p
    };
  } catch (e) {
    return {
      url,
      carbon: -1,
      percent: -1,
      error: {
        status: e.response.status,
        statusText: e.response.statusText
      }
    };
  }
}

async function parseSitemap(): Promise<string[]> {
  const res = await axios.get('https://raw.githubusercontent.com/bsc-xdc/anatomy/master/public/sitemap.xml');
  const dom = new jsdom.JSDOM(res.data, { contentType: 'application/xml' });
  return Array.from(dom.window.document.querySelectorAll('loc'), (loc: Element) => loc.textContent || '');
}

async function collectData(): Promise<CarbonData> {
  const urls = await parseSitemap();
  const filteredUrls = urls.map((url) => url.replace(/\/$/m, ''));
  const promises = filteredUrls.map((url) => getCarbon(url));
  const results = Array.from(await Promise.all(promises));
  return {
    date: new Date().toISOString(),
    results
  };
}

const handler: Handler = async () => {
  const uri = process.env.MONGO_CONNECTION as string;
  const client = new MongoClient(uri);

  try {
    const database = client.db('carbon-metrics');
    const carbon = database.collection<CarbonData>('metrics');
    const carbonData = await collectData();
    await carbon.insertOne(carbonData);
    return {
      statusCode: 200
    };
  } catch (error) {
    return {
      statusCode: 500
    };
  } finally {
    await client.close();
  }
};

export { handler };