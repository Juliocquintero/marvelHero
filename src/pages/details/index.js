import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../app';
import DataContext from '../../hoc/context/dataContext';
import AppearancesSection from './AppearancesSection';
import {
  ButtonMore,
  DetailsWrapper,
  Hero,
  HeroDescription,
  HeroImage,
  HeroTitle,
  ReturnButton,
} from './styles';

const HeroDetails = () => {
  const { contentViewed, handleReturnToHome } = useContext(DataContext);
  const { thumbnail, name, description, urls } = contentViewed;
  const [details, wiki] = urls;
  const defaultDescription =
    'This character does not contain a description, to continue seeing it visit the official Marvel website';
  const returnToHome = () => {
    handleReturnToHome();
  };
  return (
    <DetailsWrapper>
      <Hero descriptionSize={description.length}>
        <HeroImage src={`${thumbnail?.path}.${thumbnail?.extension} `} alt={name} />
        <HeroTitle nameLength={name}>{name}</HeroTitle>
        <HeroDescription>{description || defaultDescription}</HeroDescription>
        <ButtonMore href={wiki?.url || details?.url} target="_blank" rel="noreferrer">
          <span>VIEW MORE</span>
        </ButtonMore>
      </Hero>

      <AppearancesSection name="comics" data={contentViewed}></AppearancesSection>
      <hr />
      <AppearancesSection name="series" data={contentViewed}></AppearancesSection>
      <hr />
      <AppearancesSection name="events" data={contentViewed}></AppearancesSection>
      <ReturnButton onClick={returnToHome}>
        <Link to={`${home}`}>
          <i className="fas fa-arrow-circle-left" />
        </Link>
      </ReturnButton>
    </DetailsWrapper>
  );
};

export default HeroDetails;
