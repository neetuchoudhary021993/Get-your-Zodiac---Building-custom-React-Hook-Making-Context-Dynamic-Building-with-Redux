//code here

// store.js

import {createStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools())

export default store;
