import { createContext, useState } from 'react';
import useCart from '../hooks/useCart';

export const FoodsContext = createContext();

function FoodsProvider({ children }) {
  const cartData = useCart();
  const [foods] = useState([
    {
      id: 1,
      name: 'Bana Break',
      category: 'Breakfast',
      price: 2.99,
      image: '/img/foods/Bana Break.gif',
    },
    {
      id: 2,
      name: 'Borolox Breakfux',
      category: 'Breakfast',
      price: 10.99,
      image: '/img/foods/borolox-breakfuxx.gif',
    },
    {
      id: 3,
      name: 'Burger Buzz',
      category: 'Lunch',
      price: 5.99,
      image: '/img/foods/Burger Buzz.png',
    },
    {
      id: 4,
      name: 'Chingry Chook',
      category: 'Lunch',
      price: 8.99,
      image: '/img/foods/Chingry Chook.png',
    },
    {
      id: 5,
      name: 'Chotto Breakfuss',
      category: 'Breakfast',
      price: 3.99,
      image: '/img/foods/Chotto Breakfuss.gif',
    },
    {
      id: 6,
      name: 'Diminz Dine',
      category: 'Dinner',
      price: 7.99,
      image: '/img/foods/Diminz Din.gif',
    },
    {
      id: 7,
      name: 'Gorib Breakfuss',
      category: 'Breakfast',
      price: 4.99,
      image: '/img/foods/Gorib Breakfush.png',
    },
    {
      id: 8,
      name: 'Gorib Dine',
      category: 'Dinner',
      price: 5.99,
      image: '/img/foods/Gorib Dinner.png',
    },
    {
      id: 9,
      name: 'Motamuti Lunch',
      category: 'Lunch',
      price: 8.99,
      image: '/img/foods/Motatamuti Lunch.jpg',
    },
    {
      id: 10,
      name: 'Ofix Lun',
      category: 'Lunch',
      price: 9.99,
      image: '/img/foods/Ofix Lun.jpg',
    },
    {
      id: 11,
      name: 'Raater Khaadya',
      category: 'Dinner',
      price: 8.99,
      image: '/img/foods/Raater Khaadya.png',
    },
    {
      id: 12,
      name: 'Saada Rice Halxa',
      category: 'Lunch',
      price: 6.99,
      image: '/img/foods/Saada Rice Halka Lunch.png',
    },
  ]);

  //   get food by id
  const getFoodById = (id) => {
    return foods.find((food) => food.id === +id);
  };

  return (
    <FoodsContext.Provider value={{ foods, getFoodById, ...cartData }}>
      {children}
    </FoodsContext.Provider>
  );
}

export default FoodsProvider;
