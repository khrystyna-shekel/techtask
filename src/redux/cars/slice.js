import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsThunk } from "./operations";

const initialState = {
  carList: [],
  favouriteList: [],
  isModal: false,
  isLoading: false,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.carList = [...state.carList, ...payload];
      })
      .addCase(fetchCarsThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
