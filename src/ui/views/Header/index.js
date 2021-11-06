import { useContext } from 'react';
import DataContext from '../../../hoc/context/dataContext';

import MarvelIcon from '../../components/MarvelIcon';
import SearchButton from '../../components/SearchButton';
import InputFilter from './Filter';
import { HeaderContainer } from './styles';

const Header = () => {
  const { searchIsActive, handleSearchButton } = useContext(DataContext);
  // const hasContent = Object.keys(contentViewed).length !== 0;

  return (
    <>
      <HeaderContainer>
        <MarvelIcon />
        {/* {!Object.keys(contentViewed).length > 0 && (
          <SearchButton
            handleSearchButton={handleSearchButton}
            section="header"
            hasSearch={hasSearch}
          />
        )} */}

        <SearchButton
          handleSearchButton={handleSearchButton}
          section="header"
          searchIsActive={searchIsActive}
        />
      </HeaderContainer>
      <InputFilter searchIsActive={searchIsActive} handleSearchButton={handleSearchButton} />
      <hr />
    </>
  );
};

export default Header;
