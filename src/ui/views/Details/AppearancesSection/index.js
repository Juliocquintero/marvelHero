import { useEffect, useState } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import AppearancesItem from './AppearancesItem';
import { AppearancesList, ListHeader, ListName } from './styles';

const AppearancesSection = ({ name, data }) => {
  let { collectionURI, available, setError } = data[name];
  const PUBLIC_KEY = `17ad198f540be002a0cd5b1d6a016369`;
  const HASH = '608a1a977f8dbfb8b36e475a24f088d2';
  const TS = `1`;
  const URL = `${collectionURI}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
  const [appearances, setAppearances] = useState([]);

  useEffect(() => {
    useFetch
      .getData(URL)
      .then((data) => {
        setAppearances(data);
      })
      .catch((error) => setError(error));
  }, [URL, setError]);

  return (
    <div>
      <ListHeader>
        <ListName>{name}</ListName>
        <span>{available}</span>
      </ListHeader>
      <AppearancesList>
        {appearances.map((el) => (
          <AppearancesItem data={el} key={el.id} />
        ))}
        {appearances.length === 0 && <p>Not Data...</p>}
      </AppearancesList>
    </div>
  );
};

export default AppearancesSection;
