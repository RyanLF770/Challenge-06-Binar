import {configureStore} from '@reduxjs/toolkit';
import carsReducer from './slice';

const store= configureStore({
  reducer: {
    cars: carsReducer,
  },
});


export default store;
