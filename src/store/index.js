import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, addToCart, removeFromCart } from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { store, addToCart, removeFromCart };
