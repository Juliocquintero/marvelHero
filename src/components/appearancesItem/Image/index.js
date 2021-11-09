import { Caption, ImageWrapper, Img } from './styles';

const Image = ({ data }) => {
  const [detail, wiki] = data.urls;

  // const imageTypes = {
  //   portrait: 'portrait_uncanny',
  //   standard: 'standard_fantastic',
  //   landscape: 'landscape_incredible',
  // };
  return (
    <a href={detail.url || wiki?.url} target="_blank" rel="noreferrer">
      <ImageWrapper>
        <Caption>{data?.title}</Caption>
        <Img
          src={
            // `${data?.thumbnail?.path}/${imageTypes.portrait}.${data?.thumbnail?.extension}` ||
            `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`
          }
          alt={data?.title}
        />
      </ImageWrapper>
    </a>
  );
};

export default Image;
