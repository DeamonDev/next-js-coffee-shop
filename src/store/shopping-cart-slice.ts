import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCoffeeById, getCoffees } from "../../data/coffees";
import { AppState } from "./store";

export interface ShoppingCartState {
  items: {
    id: string;
    amount: number;
    price: number;
  }[];
  total: number;
}

const initialShoppingCartState: ShoppingCartState = {
  items: [],
  total: 0,
};

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState: initialShoppingCartState,
  reducers: {
    addItemById: (state, action: PayloadAction<string>) => {
      let id = action.payload;
      let coffee = getCoffeeById(id);
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        state.items.push({ id: id, amount: 1, price: coffee.price });
        state.total = state.total + coffee.price;
      } else {
        existingItem.amount++;
        state.total = state.total + existingItem.price;
      }
    },
    removeItemById: (state, action: PayloadAction<string>) => {
      let id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        return state;
      }

      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.total = state.total - existingItem.price;
      } else {
        existingItem.amount--;
        state.total = state.total - existingItem.price;
      }
    },
  },
});

export const { addItemById, removeItemById } = shoppingCartSlice.actions;
export const selectShoppingCartItems = (state: AppState) =>
  state.shoppingCart.items;
export const selectShoppingCartTotal = (state: AppState) =>
  state.shoppingCart.total;
export default shoppingCartSlice.reducer;
