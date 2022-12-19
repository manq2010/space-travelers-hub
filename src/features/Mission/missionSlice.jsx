/* eslint-disable no-param-reassign */
// Import createSlice() from Redux toolkit:
import { createSlice } from '@reduxjs/toolkit';

// Initial state for Redux store:
const initialState = {
  missions: [],
  isLoading: true,
  isMember: true,
  status: 'idle',
  error: '',
};

// Create Redux state slice
const missionSlice = createSlice({
  name: 'missions',
  initialState, // Define initial state
  reducers: {
    // Define reducers
    addMission: (state) => {
      state.missions = [...state.missions];
    },
    membership: (state) => {
      state.isMember = !state.isMember;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase();
  },
});

// Export actions generated by "createSlice()":
export const { addMission, membership } = missionSlice.actions;

// Export reducer generated by "createSlice()":
export default missionSlice.reducer;