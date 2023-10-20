//code here

// store.js

import { configureStore } from '@reduxjs/toolkit';
import zodiac from './reducers';

const store = configureStore({
  reducer: {
    zodiac: ZodiacReducer,
  },
});

export default store;
