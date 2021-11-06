import { useContext } from 'react';
import { useHistory } from 'react-router';
import DataContext from '../../../hoc/context/dataContext';
import { Card, Image, Name } from './styles';

const HeroCard = ({ hero }) => {
  const { handleViewed, handleSearchButton, searchIsActive } = useContext(DataContext);
  let history = useHistory();

  const showDetails = () => {
    if (searchIsActive) handleSearchButton();
    handleViewed(hero);
    history.push(`/hero/${hero.id}`);
  };

  return (
    <Card onClick={showDetails}>
      <Image src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension} `} alt={hero?.name} />
      <div>
        <Name> {hero?.name}</Name>
      </div>
    </Card>
  );
};

export default HeroCard;
