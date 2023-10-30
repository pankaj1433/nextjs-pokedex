import { createSlice } from "@reduxjs/toolkit";

import type { SearchState } from './searchSlice.types';

// Initial state
const initialState: SearchState = {
  searchData: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state: SearchState, action) => {
      state.searchData = action.payload;
    },
  },
});

export default searchSlice;
