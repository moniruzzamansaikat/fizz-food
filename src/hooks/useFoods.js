import { useContext } from 'react';
import { FoodsContext } from '../context/FoodsProvider';

const useFoods = () => {
  return useContext(FoodsContext);
};

export default useFoods;
