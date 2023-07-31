import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Read Action
export const venderService = createAsyncThunk("product", async (id) => {
  try {
    const result = await axios.post("/admin-service", {
      userId:id,
    });
    return result.data.serviceData;
  } catch (error) {
    console.log(error);
  }
});

export const venderSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const updatedState = {
        ...state,
        products: [...state.product, newProduct],
      };
      return updatedState;
    },
    updateProduct: (state, action) => {
      // Update the specified product in the state
      const updatedProduct = action.payload; // Assuming the updated product is provided in the action payload
      const updatedProducts = state.product.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      const updatedState = {
        ...state,
        products: updatedProducts,
      };
      return updatedState;
    },

    deleteProduct: (state, action) => {
      // Delete the specified product from the state
      const productId = action.payload; // Assuming the product ID to be deleted is provided in the action payload
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId
      );
      const updatedState = {
        ...state,
        products: updatedProducts,
      };
      return updatedState;
    },
  },
  extraReducers: {
    [venderService.pending]: (state) => {
      state.loading = true;
    },
    [venderService.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [venderService.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = venderSlice.actions;

export default venderSlice.reducer;
