import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function useCart() {
  const [cart, setCart] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jsonStr = localStorage.getItem('cart');
    const cart = JSON.parse(jsonStr) || [];
    setCart(cart);
  }, []);

  // check if the item is already in the cart
  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.foodId === id);
  };

  // return quantity of the item in the cart
  const getQuantity = (id) => {
    const cartItem = cart.find((cartItem) => cartItem.foodId === id);
    return cartItem ? cartItem.quantity : 0;
  };

  // add order
  const addToCart = (cartItem) => {
    const newCart = [...cart, cartItem];
    setCart(newCart);
    swal({
      buttons: ['Add more foods', 'Go to Cart'],
      title: 'Item added to cart !',
      icon: 'success',
    }).then((value) => {
      if (value) {
        navigate('/cart');
      } else {
        navigate('/foods');
      }
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.foodId !== id);
    swal('Removed from cart', '', 'success');
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // update cart
  const updateCart = (id, quantity) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.foodId === id) {
        cartItem.quantity = quantity;
      }
      return cartItem;
    });
    setCart(newCart);
    swal('Cart updated', '', 'success');
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // confirm order
  const confirmOrder = () => {
    setCart([]);
    setConfirmed(true);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return {
    cart,
    confirmOrder,
    confirmed,
    addToCart,
    isInCart,
    getQuantity,
    removeFromCart,
    updateCart,
  };
}

export default useCart;
