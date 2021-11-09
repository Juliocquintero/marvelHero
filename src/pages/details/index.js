import { useContext, useEffect } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import DataContext from '../../hoc/context/dataContext';
import { useFetch } from '../../hooks/useFetch';
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
  const { contentViewed, handleViewed, setLoading, error, setError, handleReturnToHome } =
    useContext(DataContext);
  const { thumbnail, name, description, urls } = contentViewed;
  const history = useLocation().pathname;
  const id = history.substring(history.lastIndexOf('/') + 1);
  const hasContent = Object.keys(contentViewed).length > 0;

  useEffect(() => {
    if (!hasContent) {
      const TS = `1`;
      const PUBLIC_KEY = `17ad198f540be002a0cd5b1d6a016369`;
      const HASH = '608a1a977f8dbfb8b36e475a24f088d2';
      const urlDefault = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
      useFetch
        .getData(urlDefault)
        .then((data) => {
          handleViewed(data[0]);
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line
  }, []);

  const defaultDescription =
    'This character does not contain a description, to continue seeing it visit the official Marvel website';
  const returnToHome = () => {
    handleReturnToHome();
  };
  return (
    <>
      {error && <Redirect to="/" />}
      <DetailsWrapper>
        {hasContent && (
          <>
            <Hero descriptionSize={description?.length}>
              <HeroImage src={`${thumbnail?.path}.${thumbnail?.extension} `} alt={name} />
              <HeroTitle nameLength={name}>{name}</HeroTitle>
              <HeroDescription>{description || defaultDescription}</HeroDescription>
              <ButtonMore
                href={urls?.wiki?.url || urls?.details?.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>VIEW MORE</span>
              </ButtonMore>
            </Hero>

            <AppearancesSection name="comics" data={contentViewed}></AppearancesSection>
            <hr />
            <AppearancesSection name="series" data={contentViewed}></AppearancesSection>
            <hr />
            <AppearancesSection name="events" data={contentViewed}></AppearancesSection>
            <ReturnButton onClick={returnToHome}>
              <Link to="/">
                <i className="fas fa-arrow-circle-left" />
              </Link>
            </ReturnButton>
          </>
        )}
      </DetailsWrapper>
    </>
  );
};

export default HeroDetails;
