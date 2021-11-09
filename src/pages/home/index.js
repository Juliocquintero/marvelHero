import { useContext } from 'react';
import HeroCard from '../../components/heroCard';
import InfiniteScroll from '../../components/infiniteScroll';
import Loader from '../../components/loader';
import MessageError from '../../components/messageError';
import DataContext from '../../hoc/context/dataContext';

import { DefaultResult, HomeWrapper, HTitle } from './styles';

const Home = () => {
  const { data, error, loading, updateData, searchInHome } = useContext(DataContext);

  return (
    <HomeWrapper>
      <HTitle>Charachers</HTitle>
      {error && <MessageError error={error} />}
      <InfiniteScroll
        nameList={'characters'}
        orientation="y"
        scrollThreshold={20}
        hasMore={searchInHome === ''}
        next={updateData}
        Children={data?.map((el) => (
          <HeroCard hero={el} key={`${el.id}`} />
        ))}
      />

      {loading && <Loader />}
      {data.length < 1 && !loading && (
        <DefaultResult>No se encontraron coincidencias...</DefaultResult>
      )}
    </HomeWrapper>
  );
};

export default Home;
