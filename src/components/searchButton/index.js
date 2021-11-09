import { Button } from './styles';

const SearchButton = ({ handleSearchButton, searchIsActive, section }) => {
  return (
    <Button
      onClick={handleSearchButton}
      section={section}
      type={searchIsActive ? 'button' : 'reset'}
    >
      {section === 'filter' && <i className="fas fa-search" />}
      {section === 'header' && !searchIsActive && <i className="fas fa-search" />}
      {section === 'header' && searchIsActive && <i className="fas fa-chevron-up" />}
    </Button>
  );
};

export default SearchButton;
