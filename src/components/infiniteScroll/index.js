import { ScrollX, ScrollY } from './styles';

const InfiniteScroll = ({
  Children,
  orientation = 'x',
  nameList = '',
  scrollThreshold = 20,
  next,
  hasMore,
}) => {
  const handleScrollX = () => {
    const element = document.querySelector(`.${nameList}`);
    const scrollLeft = element?.scrollLeft;
    const scrollWidth = element?.scrollWidth;
    const viewport = window.innerWidth - 20;
    const distanceToFinal = scrollWidth - (scrollLeft + viewport);
    if (distanceToFinal <= scrollThreshold) {
      next();
    }
  };

  const handleScrollY = () => {
    const element = document.querySelector(`.${nameList}`);
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const viewportHeight = window.innerHeight;

    const isFinal = scrollTop + viewportHeight >= scrollHeight;
    if (isFinal && hasMore) next();
  };

  return (
    <>
      {orientation === 'x' ? (
        <ScrollX onScroll={handleScrollX} className={nameList}>
          {Children}
        </ScrollX>
      ) : (
        <ScrollY onScroll={handleScrollY} className={nameList}>
          {Children}
        </ScrollY>
      )}
    </>
  );
};

export default InfiniteScroll;
