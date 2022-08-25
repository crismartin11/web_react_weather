
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import qs from "qs";
import { format } from 'date-fns';
import { weatherApi, urlIconApi } from './../api';
import { onLoadWeather, onLoadForecast, onSetActive, onSetLoadingWeather, onSetLoadingForecast } from '../store/weather/weatherSlice';
import { getForecastList } from './../helpers';

export const useWeatherStore = () => {

    const dispatch = useDispatch();
    const { weather, forecast, active, isLoadingWeather, isLoadingForecast } = useSelector( state => state.weather );

    const loadWeather = async(cityId) => {
        try {
            dispatch(onSetLoadingWeather({bool: true}));
            const params = qs.stringify({ 'id': cityId });
            const { data } = await weatherApi.get("weather?"+params);
            const date = new Date(data.dt * 1000);
            const customData = {...data, dt_txt: format(date, 'yyyy-MM-dd HH:mm:ss')};
            dispatch(onLoadWeather({...customData}));

            if (active === null) dispatch(onSetActive({...customData}));
        } catch(error) {
            dispatch(onSetLoadingWeather({bool: false}));
            Swal.fire("Error al consultar pronóstico.");
        }
    }

    const loadForecast = async(cityId) => {
        try {
            dispatch(onSetLoadingForecast({bool:true}));
            const params = qs.stringify({ 'id': cityId, 'cnt': 40 });
            const { data } = await weatherApi.get("forecast?"+params);
            
            dispatch(onLoadForecast({...data, list: getForecastList(data.list)}));
        } catch(error) {
            dispatch(onSetLoadingForecast({bool:false}));
            Swal.fire("Error al consultar pronóstico.");
        }
    }

    const setActive = (data) => {
        dispatch(onSetActive({...data}));
    }

    const getUrlIconApi = (iconName) => `${urlIconApi}${iconName}@2x.png`;

    return {
        // properties
        weather,
        forecast,
        active,
        isLoadingWeather,
        isLoadingForecast,

        // methods
        loadWeather,
        loadForecast,
        setActive,
        getUrlIconApi,
    }
}