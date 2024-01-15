// actions.ts
import { PayloadAction } from "@reduxjs/toolkit";

export const addToCart = (product: {
  id: string;
  quantity: number;
}): PayloadAction<{ id: string; quantity: number }> => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
