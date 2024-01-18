// reducers.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  quantity: number;
  price_in_cents: number;
  name: string;
  image_url: string;
  description?: string;
  category?: string;
}

export interface CartState {
  cartItems: {
    items: CartItem[];
  };
}

const initialState: CartState = {
  cartItems: {
    items: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingProductIndex = state.cartItems.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.cartItems.items[existingProductIndex].quantity +=
          action.payload.quantity;
      } else {
        state.cartItems.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems.items = state.cartItems.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
