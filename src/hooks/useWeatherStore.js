
import { useDispatch, useSelector } from 'react-redux';
import qs from "qs";
import { format } from 'date-fns';
import weatherApi from './../api/weatherApi';
import { onLoadWeather, onLoadForecast, onSetActive } from '../store/weather/weatherSlice';
import { getForecastList } from './../helpers/getForecastList';

export const useWeatherStore = () => {

    const dispatch = useDispatch();
    const { weather, forecast, active } = useSelector( state => state.weather );

    const loadWeather = async(cityId) => {
        try {
            const params = qs.stringify({ 'id': cityId });
            const { data } = await weatherApi.get("weather?"+params);
            const date = new Date(data.dt * 1000);
            const customData = {...data, dt_txt: format(date, 'yyyy-MM-dd HH:mm:ss')};
            dispatch(onLoadWeather({...customData}));

            if (active === null) dispatch(onSetActive({...customData}));
        } catch(error) {
            console.log("useWeatherStore ", error);
        }
    }

    const loadForecast = async(cityId) => {
        try {
            const params = qs.stringify({ 'id': cityId, 'cnt': 35 });
            const { data } = await weatherApi.get("forecast?"+params);
            const customList = getForecastList(data.list);
            dispatch(onLoadForecast({...data, list: customList}));
        } catch(error) {
            console.log("useWeatherStore ", error);
        }
    }

    const setActive = (data) => {
        dispatch(onSetActive({...data}));
    }

    return {
        // properties
        weather,
        forecast,
        active,

        // methods
        loadWeather,
        loadForecast,
        setActive,
    }
}