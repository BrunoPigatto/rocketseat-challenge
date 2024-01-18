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
    updateFromCart: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cartItems.items.findIndex(
        (item) => item.id === id
      );
      if (itemIndex !== -1) {
        state.cartItems.items[itemIndex].quantity = quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems.items = state.cartItems.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, updateFromCart } = cartSlice.actions;
export default cartSlice.reducer;
