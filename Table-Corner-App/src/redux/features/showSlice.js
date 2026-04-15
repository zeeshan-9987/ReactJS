import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API call
export const fetchData = createAsyncThunk(
  "show/fetchData",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    return data;
  }
);

const showSlice = createSlice({
  name: "show",
  initialState: {
    items: [], //API ka saara data
    selectedItem: null, //jo "Show" pe click hoga
    loading: false,
  },
  reducers: {
    //selected row store karega
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
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

export const { setSelectedItem } = showSlice.actions;
export default showSlice.reducer;