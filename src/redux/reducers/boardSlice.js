import { createSlice } from '@reduxjs/toolkit';
import wordsList from 'api/words.json';

const randomWord =
  wordsList.words[Math.floor(Math.random() * wordsList.words.length)];
const initialState = {
  board: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  position: 0,
  row: 0,
  correctWord: randomWord,
  allWords: wordsList.words,
};
export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    incPosition: (state) => {
      state.position++;
    },
    decPosition: (state) => {
      state.position--;
    },
    incRow: (state) => {
      state.row++;
    },
  },
});

export const { setBoard, incPosition, decPosition, incRow } =
  boardSlice.actions;

export default boardSlice.reducer;
