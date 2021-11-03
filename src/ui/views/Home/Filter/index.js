import { useContext } from 'react';
import DataContext from '../../../../hoc/context/dataContext';
import { Filter, FilterWrapper, SearchButton } from './styles';

const InputFilter = () => {
  const { handleSearch } = useContext(DataContext);
  return (
    <FilterWrapper>
      <Filter
        type="text"
        placeholder="Ingresa tu busqueda..."
        name="search"
        onChange={(e) => handleSearch(e)}
      />
      <SearchButton>
        <i className="fas fa-search" />
      </SearchButton>
    </FilterWrapper>
  );
};

export default InputFilter;
