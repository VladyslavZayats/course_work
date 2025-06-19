import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cat } from '../data/cats';

import { cats as initialCats } from '../data/cats';

interface CatState {
  cats: Cat[];
}

const initialState: CatState = {
  cats: initialCats,
};

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    addCat: (state, action: PayloadAction<Cat>) => {
      state.cats.push(action.payload);
    },
  },
});

export const { addCat } = catSlice.actions;
export default catSlice.reducer;
