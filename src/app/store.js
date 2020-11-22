import { configureStore } from '@reduxjs/toolkit'; 
import   gameReducer   from '../modules/gameStore';

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
