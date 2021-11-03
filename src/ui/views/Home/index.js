import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DataContext from '../../../hoc/context/dataContext';
import HeroCard from '../../components/HeroCard';
import Loader from '../../components/Loader';
import MessageError from '../../components/messageError';
import InputFilter from './Filter';
import { HTitle } from './styles';
import './styles.css';

const Home = () => {
  const { data, error, loading, updateData } = useContext(DataContext);
  return (
    <div className="App">
      <InputFilter />
      <HTitle>Charachers</HTitle>

      {error && <MessageError error={error} />}
      <InfiniteScroll
        dataLength={data.length || 1500}
        next={updateData}
        hasMore={true}
        className="cards-wrapper "
        scrollThreshold="50px"
      >
        {data?.map((el) => (
          <HeroCard hero={el} key={`${el.id}`} />
        ))}
      </InfiniteScroll>
      {loading && <Loader />}
    </div>
  );
};

export default Home;
