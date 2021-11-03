import { useContext } from 'react';
import { useHistory } from 'react-router';
import DataContext from '../../../hoc/context/dataContext';
import { Card, Image, Name } from './styles';

const HeroCard = ({ hero }) => {
  const { handleViewed } = useContext(DataContext);
  let history = useHistory();

  const showDetails = () => {
    handleViewed(hero);
    history.push(`/hero/${hero.id}`);
  };

  return (
    <Card onClick={showDetails}>
      <Image src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension} `} alt={hero?.name} />
      <Name href={hero?.urls[0]?.url}> {hero?.name}</Name>
    </Card>
  );
};

export default HeroCard;
