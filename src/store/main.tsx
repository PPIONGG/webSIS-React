import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreMain } from "../types/Store";
import { fetchWorkStatus } from "../services/apiService";

const initialState: StoreMain = {
  workStatusData: [],
  isLoadingWorkStatus: false,
  workStatusError: null,
  
};

export const fetchMainData = createAsyncThunk(
  "main/fetchMainData",
  async (
    { status, userName }: { status: string; userName: string },
    thunkAPI
  ) => {
    try {
      const data = await fetchWorkStatus(status, userName);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainData.pending, (state) => {
        state.isLoadingWorkStatus = true;
        state.workStatusError = null;
        state.workStatusData = [];
      })
      .addCase(fetchMainData.fulfilled, (state, action) => {
        state.isLoadingWorkStatus = false;
        state.workStatusData = action.payload;
        state.workStatusError = null;
      })
      .addCase(fetchMainData.rejected, (state, action) => {
        state.isLoadingWorkStatus = false;
        state.workStatusError = action.payload as string;
        state.workStatusData = [];
      });
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
