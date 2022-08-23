import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoadingWeather: false,
        weather: null,
        active: null,
        isLoadingForecast: false,
        forecast: null
    },
    reducers: {
        onLoadWeather(state, { payload }) {
            state.isLoadingWeather = false;
            state.weather = payload;
        },
        onLoadForecast(state, { payload }) {
            state.isLoadingForecast = false;
            state.forecast = payload;
        },
        onSetActive(state, { payload }) {
            state.active = payload;
        },

        onSetLoadingWeather(state, { payload }) {
            state.isLoadingWeather = payload.bool;
        },
        onSetLoadingForecast(state, { payload }) {
            state.isLoadingForecast = payload.bool;
        },
    }
});

export const {
    onLoadWeather,
    onLoadForecast,
    onSetActive,
    onSetLoadingWeather,
    onSetLoadingForecast,
} = weatherSlice.actions;
