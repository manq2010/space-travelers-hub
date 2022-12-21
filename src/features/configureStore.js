// Import configureStore() from Redux toolkit:
import { configureStore } from '@reduxjs/toolkit';

// import reducers
import missionReducer from './Mission/missionSlice';
import rocketReducer from './Rocket/RocketSlice';

const store = configureStore({
  reducer: {
    // Add mssion reducer
    missionReducer,
    rocketReducer,
  },
});

export default store;
