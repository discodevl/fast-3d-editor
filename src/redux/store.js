
import { configureStore } from '@reduxjs/toolkit';
import config from './config/config';
import model from './model/model';

export const store = configureStore({
  reducer: {config, model}
})