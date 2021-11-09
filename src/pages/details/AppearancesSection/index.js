import { useEffect, useState } from 'react';
import AppearancesItem from '../../../components/appearancesItem';
import InfiniteScroll from '../../../components/infiniteScroll';
import Loader from '../../../components/loader';
import { useFetch } from '../../../hooks/useFetch';
import { ListCount, ListHeader, ListName } from './styles';

const AppearancesSection = ({ name, data }) => {
  let { collectionURI, available, setError } = data[name];
  const [pageSearch, setPageSearch] = useState(0);

  const [appearances, setAppearances] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateData = () => {
    setLoading(true);
    const PUBLIC_KEY = `17ad198f540be002a0cd5b1d6a016369`;
    const HASH = '608a1a977f8dbfb8b36e475a24f088d2';
    const TS = `1`;
    const LIMIT = 30;
    const URL = `${collectionURI}?limit=${LIMIT}&offset=${
      pageSearch * LIMIT
    }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
    useFetch
      .getData(URL)
      .then((data) => {
        const newData = appearances.concat(data);
        setAppearances(newData);
        setLoading(false);
        setPageSearch(pageSearch + 1);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ListHeader>
        <ListName>{name}</ListName>
        <ListCount>{available}</ListCount>
      </ListHeader>
      {loading && <Loader />}
      {appearances?.length === 0 && !loading && <p>Not Data...</p>}
      <InfiniteScroll
        nameList={name}
        orientation="x"
        scrollThreshold={20}
        next={updateData}
        Children={appearances?.map((el) => (
          <AppearancesItem data={el} key={el.id} />
        ))}
      ></InfiniteScroll>
    </div>
  );
};

export default AppearancesSection;
