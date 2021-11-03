import { useContext } from 'react';
import { Redirect, useHistory } from 'react-router';
import DataContext from '../../../hoc/context/dataContext';
import AppearancesSection from './AppearancesSection';
import Hero from './Hero';
import { DetailsWrapper, ReturnButton } from './styles';

const HeroDetails = () => {
  const { contentViewed } = useContext(DataContext);
  const { thumbnail, name, description, urls } = contentViewed;
  let history = useHistory();
  const returnToHome = () => {
    history.push('');
  };
  return (
    <DetailsWrapper>
      {!contentViewed && <Redirect to="/" />}

      <Hero thumbnail={thumbnail} name={name} description={description} urls={urls} />

      <AppearancesSection name="comics" data={contentViewed}></AppearancesSection>
      <hr />
      <AppearancesSection name="series" data={contentViewed}></AppearancesSection>
      <hr />
      <AppearancesSection name="events" data={contentViewed}></AppearancesSection>
      <ReturnButton onClick={returnToHome}>
        <i className="fas fa-arrow-circle-left" />
      </ReturnButton>
    </DetailsWrapper>
  );
};

export default HeroDetails;
