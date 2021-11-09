import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../../../hoc/context/dataContext';
import { ItemWrapper } from './styles';

const ListItem = ({ data, handleSearchButton }) => {
  const { handleViewed } = useContext(DataContext);
  // let history = useHistory();
  const NavToNewContent = () => {
    handleSearchButton();
    handleViewed(data);
  };

  const { id, name } = data;
  return (
    <ItemWrapper onClick={NavToNewContent}>
      <Link to={`/character/${id}`}>{name}</Link>
    </ItemWrapper>
  );
};

export default ListItem;
