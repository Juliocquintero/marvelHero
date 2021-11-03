const getData = (url) => {
  return fetch(url)
    .then((resp) => {
      let message = {
        status: resp.status,
        statusText: resp.statusText,
      };
      if (resp.ok) {
        return resp.json();
      } else {
        throw message;
      }
    })
    .then((data) => data?.data?.results);
};

export const useFetch = {
  getData,
};
