import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface ShoppingCartState {
  items: {
    id: string;
    amount: number;
  }[];
}

const initialShoppingCartState: ShoppingCartState = {
  items: [{ id: "cff-2", amount: 23 }],
};

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState: initialShoppingCartState,
  reducers: {
    addItemById: (state, action: PayloadAction<string>) => {
      let id = action.payload;
      return state;
    },
    removeItemById: (state, action: PayloadAction<string>) => {
      let id = action.payload;
      return state;
    },
  },
});

export const { addItemById, removeItemById } = shoppingCartSlice.actions;
export const selectShoppingCartItems = (state: AppState) =>
  state.shoppingCart.items;
export default shoppingCartSlice.reducer;
