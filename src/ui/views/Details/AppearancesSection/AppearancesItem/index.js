import DefaultItemWithoutImage from './Default';
import Image from './Image';

const AppearancesItem = ({ data }) => {
  const hasImg = data.thumbnail !== null && Object.keys(data.thumbnail).length > 0;
  return <>{hasImg ? <Image data={data} /> : <DefaultItemWithoutImage data={data} />}</>;
};

export default AppearancesItem;
