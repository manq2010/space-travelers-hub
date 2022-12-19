// Import configureStore() from Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';

// import reducers
import missionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    // Add mssion reducer
    missionReducer,
  },
});

export default store;
