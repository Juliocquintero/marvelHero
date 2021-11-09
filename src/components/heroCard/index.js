import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../hoc/context/dataContext';
import { Card, Image, Name } from './styles';

const HeroCard = ({ hero }) => {
  const { handleViewed, handleSearchButton, searchIsActive } = useContext(DataContext);
  const showDetails = () => {
    if (searchIsActive) handleSearchButton();
    handleViewed(hero);
  };

  return (
    <Card onClick={showDetails}>
      <Link to={`/character/${hero.id}`}>
        <Image src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension} `} alt={hero?.name} />
        <div>
          <Name> {hero?.name}</Name>
        </div>
      </Link>
    </Card>
  );
};

export default HeroCard;
