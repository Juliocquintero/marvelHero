import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pageSearch, setPageSearch] = useState(0);
  const [contentViewed, setContentViewed] = useState({});
  const [searchInHome, setSearchInHome] = useState('');
  const [searchInDetails, setSearchInDetails] = useState('');
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [detailSearchList, setDetailSearchList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const PUBLIC_KEY = `17ad198f540be002a0cd5b1d6a016369`;
  // const PRIVATE_KEY = '4d0c6ffd7b26eabd4ed9beac0b72dbc9f876c21e';
  const HASH = '608a1a977f8dbfb8b36e475a24f088d2';
  const TS = `1`;
  const LIMIT = 50;
  // const sagaInfinity = {
  //   id: 29,
  // };

  // const urlSearch =
  //   'https://gateway.marvel.com/v1/public/events/29?ts=1&apikey=17ad198f540be002a0cd5b1d6a016369&hash=608a1a977f8dbfb8b36e475a24f088d2';

  const urlDefault = `http://gateway.marvel.com/v1/public/characters?events=29&limit=${LIMIT}&offset=0&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

  useEffect(() => {
    setLoading(true);
    useFetch
      .getData(urlDefault)
      .then((data) => {
        setData(data);
        setPageSearch(pageSearch + 1);
        console.log(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });

    // eslint-disable-next-line
  }, []);

  const handleViewed = (data) => {
    setContentViewed(data);
  };

  const handleSearch = (e, inHome) => {
    const PARAMSTOSEARCH = e.target.value;
    const urlWithParams = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${PARAMSTOSEARCH}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
    const url = PARAMSTOSEARCH === '' ? urlDefault : urlWithParams;
    setLoading(true);
    if (inHome) {
      setSearchInHome(PARAMSTOSEARCH);
      setDetailSearchList([]);
      useFetch
        .getData(url)
        .then((data) => {
          setData(data);
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSearchInDetails(PARAMSTOSEARCH);
      useFetch
        .getData(url)
        .then((data) => {
          setDetailSearchList(data);
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const endSearch = () => {
    setDetailSearchList([]);
    setSearchInDetails('');
    setSearchInHome('');
  };

  const updateData = () => {
    setLoading(true);
    let url =
      pageSearch < 2
        ? `http://gateway.marvel.com/v1/public/characters?events=29&limit=${LIMIT}&offset=${
            pageSearch * LIMIT
          }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
        : `http://gateway.marvel.com/v1/public/characters?limit=${LIMIT}&offset=${
            pageSearch * LIMIT
          }&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

    useFetch
      .getData(url)
      .then((dataresp) => {
        let newData = dataresp.filter((character) => {
          let characterInList = data.find((el) => character.id === el.id);
          return !characterInList ? character : null;
        });
        //dataResp has recorred and compared ts id with data[index].id
        let newArray = data.concat(newData);

        setData(newArray);
        setPageSearch(pageSearch + 1);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearchButton = () => {
    setSearchIsActive(!searchIsActive);
    endSearch();
  };

  const handleReturnToHome = () => {
    setContentViewed({});
    if (data.length < 30) {
      setData([]);
      setLoading(true);
      useFetch
        .getData(urlDefault)
        .then((data) => {
          setData(data);
          setPageSearch(pageSearch + 1);
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const value = {
    data,
    error,
    setError,
    loading,
    contentViewed,
    setContentViewed,
    handleViewed,
    handleSearch,
    handleSearchButton,
    handleReturnToHome,
    searchIsActive,
    searchInHome,
    searchInDetails,
    detailSearchList,
    updateData,
    endSearch,
  };
  return <DataContext.Provider value={value}> {children}</DataContext.Provider>;
};

export { DataProvider };

export default DataContext;
