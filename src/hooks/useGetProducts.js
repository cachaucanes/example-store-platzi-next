import { useEffect, useState } from 'react';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API);
      const response = await data.json();
      setProducts(response);
    };
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
