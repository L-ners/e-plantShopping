import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item to cart
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    }, // ✅ Correctly closed updateQuantity function
  },
});

// ✅ Correctly exporting actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

