import { createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '../../utils/types';

interface IConstructorState {
  constructorItems: {
    bun: TConstructorIngredient | null;
    ingredients: TConstructorIngredient[];
  };
  orderRequest: boolean;
  orderModalData: any | null;
}

const initialState: IConstructorState = {
  constructorItems: {
    bun: null,
    ingredients: []
  },
  orderRequest: false,
  orderModalData: null
};

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.constructorItems.bun = action.payload;
    },
    addIngredient: (state, action) => {
      state.constructorItems.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.constructorItems.ingredients =
        state.constructorItems.ingredients.filter(
          (_, index) => index !== action.payload
        );
    },
    clearConstructor: (state) => {
      state.constructorItems = { bun: null, ingredients: [] };
    },
    setOrderRequest: (state, action) => {
      state.orderRequest = action.payload;
    },
    setOrderModalData: (state, action) => {
      state.orderModalData = action.payload;
    }
  }
});

export const {
  setBun,
  addIngredient,
  removeIngredient,
  clearConstructor,
  setOrderRequest,
  setOrderModalData
} = constructorSlice.actions;

export default constructorSlice.reducer;
