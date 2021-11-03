import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DataContext from '../../hoc/context/dataContext';
import '../../styles/App.css';
import HeroCard from '../components/HeroCard';
import Loader from '../components/Loader';
import Header from '../views/Header';
import { CardWrapper } from './styles';

const App = () => {
  const { data, updateData } = useContext(DataContext);
  return (
    <div className="App">
      <Header />
      {/* <CardWrapper> */}
      <InfiniteScroll
        dataLength={data.length || 500}
        next={updateData}
        hasMore={true}
        loader={<Loader />}
      >
        {data?.map((el, index) => (
          <HeroCard hero={el} key={`${el.id}${index}`} />
        ))}
      </InfiniteScroll>
      {/* </CardWrapper> */}
    </div>
  );
};

export default App;
