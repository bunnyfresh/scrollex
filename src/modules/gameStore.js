import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    startGame: false,
    score: 0,
    traceWidth: 0,
    destination: 0
  },
  reducers: {
    startInit: state => { 
      state.startGame = true;
    } ,
    setTraceWidth:(state, action) => {
        state.traceWidth = action.payload;
    },
    setScore:(state, action) => {
        state.score += action.payload;
    },
    setDestination:(state, action) => {
        state.destination = action.payload;
    },
  },
});

export const { startInit , setTraceWidth , setScore , setDestination } = gameSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
 

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getStart = state => state.game.startGame;
export const getScore = state => state.game.score;
export const getTraceWidth = state => state.game.traceWidth;
export const getDestination = state => state.game.destination;

export default gameSlice.reducer;
