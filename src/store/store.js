import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from './';

export const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
