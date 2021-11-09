import { useContext } from 'react';
import { useHistory } from 'react-router';
import { home } from '../../../app';
import SearchButton from '../../../components/searchButton';
import DataContext from '../../../hoc/context/dataContext';
import ListItem from './List_Item';
import { Filter, FilterWrapper, ListSearch } from './styles';

const InputFilter = ({ searchIsActive, handleSearchButton }) => {
  const { handleSearch, detailSearchList, searchInHome, searchInDetails } = useContext(DataContext);
  let history = useHistory();
  let inHome = history.location.pathname === home;

  const handleSearchByContainer = (e) => {
    handleSearch(e, inHome);
  };

  return (
    <>
      <FilterWrapper searchIsActive={searchIsActive}>
        <div>
          <Filter
            type="text"
            placeholder="Search..."
            name="search"
            onChange={handleSearchByContainer}
            disabled={!searchIsActive}
            value={inHome ? searchInHome : searchInDetails}
          />
          <SearchButton section="filter" />
        </div>
        <ListSearch>
          {!inHome &&
            detailSearchList.map((el) => (
              <ListItem key={el.id} data={el} handleSearchButton={handleSearchButton} />
            ))}
        </ListSearch>
      </FilterWrapper>
    </>
  );
};

export default InputFilter;
