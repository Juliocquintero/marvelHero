import { Title } from './styles';

const DefaultItemWithoutImage = ({ data }) => {
  console.log(data);
  // const [detail, wiki] = data.urls;
  return (
    // <a href={detail?.url || wiki?.url} target="_blank" rel="noreferrer">
    // </a>
    <div>
      <Title>{data?.title}</Title>{' '}
    </div>
  );
};

export default DefaultItemWithoutImage;
