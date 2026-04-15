import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API call
export const fetchData = createAsyncThunk( //API call handle karta hai
  "data/fetchData",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    return data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [], //saara API data store karega
    loading: false, //loading state manage karega
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;