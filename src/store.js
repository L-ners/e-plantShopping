import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import the cart reducer

// Configure Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign the cartReducer to the cart slice
  },
});

export default store; // Export the store to be used in the application

