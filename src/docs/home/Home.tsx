import Layout from '../shared/components/Layout';
import useTitle from '../shared/hooks/useTitle';
import "./Home.scss"
import { Helmet } from 'react-helmet';

const Home = (): JSX.Element => {
  useTitle({titlePrefix: `Home`});

  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Boston Scientific Anatomy Design System website homepage"/>
      </Helmet>
      <main id="mainContent" className="app-home">
        <h1 className="page-title bsds-margin-top-remove">
          <span>Introducing</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 55" className="logo">
            <title>Anatomy</title>
            <polygon points="374.42 22.28 363.47 1.26 348.48 1.26 367.88 34.48 367.88 53.74 380.74 53.74 380.74 34.48 400 1.26 385.23 1.26 374.42 22.28" fill="#fff"/>
            <polygon points="309.48 41.39 309.26 41.39 301.25 1.26 279.79 1.26 279.79 53.74 291.48 53.74 291.48 12.21 291.62 12.21 301.18 53.74 317.2 53.74 326.68 12.21 326.83 12.21 326.83 53.74 338.96 53.74 338.96 1.26 317.35 1.26 309.48 41.39" fill="#fff"/>
            <path d="M265,16.59A24.28,24.28,0,0,0,260.16,8a22,22,0,0,0-7.9-5.62,30.39,30.39,0,0,0-21.79,0,21.59,21.59,0,0,0-7.94,5.7,24.64,24.64,0,0,0-4.81,8.6,34.59,34.59,0,0,0-1.62,10.87,34.13,34.13,0,0,0,1.65,10.84A24.43,24.43,0,0,0,222.6,47a22.13,22.13,0,0,0,7.91,5.62,27.06,27.06,0,0,0,10.8,2,27.54,27.54,0,0,0,10.91-2A22,22,0,0,0,260.16,47,24.28,24.28,0,0,0,265,38.41a33.85,33.85,0,0,0,1.66-10.84A34.33,34.33,0,0,0,265,16.59Zm-11.9,17.52a17,17,0,0,1-2.21,5.37A10.51,10.51,0,0,1,247,43.12a12.73,12.73,0,0,1-11.21,0,10.77,10.77,0,0,1-3.89-3.64,17,17,0,0,1-2.24-5.33,27.45,27.45,0,0,1-.74-6.54,29,29,0,0,1,.74-6.65,16.5,16.5,0,0,1,2.24-5.4,10.74,10.74,0,0,1,9.37-4.92,11.25,11.25,0,0,1,5.59,1.32,11.44,11.44,0,0,1,3.89,3.6,16.12,16.12,0,0,1,2.28,5.4,29,29,0,0,1,.73,6.65A29.17,29.17,0,0,1,253.11,34.11Z" fill="#fff"/>
            <polygon points="171.96 11.48 184.97 11.48 184.97 53.74 197.83 53.74 197.83 11.48 210.69 11.48 210.69 1.26 171.96 1.26 171.96 11.48" fill="#fff"/>
            <path d="M154.13,1.26H136.42L118.05,53.74h13.67l3.82-11.39h19l4,11.39h13.82ZM138.55,32.13l6.62-20.8,6.46,20.8Z" fill="#fff"/>
            <polygon points="96.54 41.24 96.4 41.24 83.83 1.26 63.84 1.26 63.84 53.74 75.82 53.74 75.82 13.02 75.96 13.02 89.34 53.74 108.52 53.74 108.52 1.26 96.54 1.26 96.54 41.24" fill="#fff"/>
            <path d="M36.09,1.26H18.37L0,53.74H13.67l3.82-11.39h19l4,11.39H54.31ZM20.51,32.13l6.61-20.8,6.47,20.8Z" fill="#fff"/>
          </svg>
          <span>the Boston Scientific design system</span>
        </h1>
      </main>
    </Layout>
  );
}

export default Home;