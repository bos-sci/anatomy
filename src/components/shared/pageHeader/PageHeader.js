import './PageHeader.scss';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <h1 className="page-title">{props.name}</h1>
      <dl className="page-publish-date body-subtle">
        <dt>Last Updated</dt>
        <dd>{new Date(props.publishedAt).toLocaleDateString()}</dd>
      </dl>
    </div>
  );
}

export default PageHeader;