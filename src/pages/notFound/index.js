import { Caption, Image, Wrapper } from './styles';

const bg = {
  fontColor: '#000000',
  bgColor: '#ffffff',
  bgImage: 'https://cdn.dribbble.com/users/1215841/screenshots/4616903/____.gif',
  alt: 'Dr. Strange',
};

const PageNotFound = () => {
  return (
    <Wrapper bgColor={bg.bgColor}>
      <Image src={bg.bgImage} alt={bg.alt} />
      <Caption fontColor={bg.color}>NOT FOUND</Caption>
    </Wrapper>
  );
};

export default PageNotFound;
