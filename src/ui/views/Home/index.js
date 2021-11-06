import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DataContext from '../../../hoc/context/dataContext';
import HeroCard from '../../components/HeroCard';
import Loader from '../../components/Loader';
import MessageError from '../../components/messageError';

import { DefaultResult, HomeWrapper, HTitle } from './styles';
import './styles.css';

const Home = () => {
  const { data, error, loading, updateData } = useContext(DataContext);

  return (
    <HomeWrapper>
      <HTitle>Charachers</HTitle>
      {error && <MessageError error={error} />}
      <InfiniteScroll
        dataLength={data.length || 1500}
        next={updateData}
        hasMore={true}
        className="cards-wrapper "
        scrollThreshold="100px"
      >
        {data?.map((el) => (
          <HeroCard hero={el} key={`${el.id}`} />
        ))}
      </InfiniteScroll>
      {loading && <Loader />}
      {data.length < 1 && !loading && (
        <DefaultResult>No se encontraron coincidencias...</DefaultResult>
      )}
    </HomeWrapper>
  );
};

export default Home;
