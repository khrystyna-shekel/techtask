import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/api";

export const fetchCarsThunk = createAsyncThunk(
  "fetchCars",
  async (page, thunkAPI) => {
    try {
      const params = URLSearchParams({
        page: page,
        limit: 12,
      });
      const { data } = await api.get(`adverts?${params}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCarsThunk = createAsyncThunk(
  "fetchAllCars",
  async (__, thunkAPI) => {
    try {
      const { data } = await api.get(`adverts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
