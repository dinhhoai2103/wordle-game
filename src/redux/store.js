import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/boardSlice';

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
