import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helper";
import { saveCartToLocalStorage, loadCartFromLocalStorage } from "../../services/localStorage";

const defaultState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
}

const initialState = loadCartFromLocalStorage() || defaultState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find(i => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
        saveCartToLocalStorage(state);
      }
    },
    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(i => i.id !== action.payload.id);
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      saveCartToLocalStorage(state);
    },
    increase: (state, action) => {
      const index = state.selectedItems.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.selectedItems[index].quantity++;
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        saveCartToLocalStorage(state);
      }
    },
    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.selectedItems[index].quantity--;
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        saveCartToLocalStorage(state);
      }
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.total = 0;
      state.itemsCounter = 0;
      saveCartToLocalStorage(state);
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } = cartSlice.actions;
