import { ButtonMore, Description, HeroWrapper, Image, Name } from './styles';

const Hero = ({ thumbnail, name, description, urls }) => {
  const [details, wiki] = urls;
  const defaultDescription =
    'This character does not contain a description, to continue seeing it visit the official Marvel website';
  return (
    <div>
      <HeroWrapper>
        <Image src={`${thumbnail?.path}.${thumbnail?.extension} `} alt={name} />
        <Name nameLength={name}>{name}</Name>
        <Description>{description || defaultDescription}</Description>
        <ButtonMore href={wiki?.url || details?.url} target="_blank" rel="noreferrer">
          <span>LISTEN NOW</span>
        </ButtonMore>
      </HeroWrapper>
    </div>
  );
};

export default Hero;
