
import { useEffect, useState } from 'react';
import { useWeatherStore } from './../../hooks/useWeatherStore';
import { Selector, Card, Loading } from '../';
import { listCity } from './../../helpers';

export const Grid = (props) => {

    const { weather, loadWeather, forecast, loadForecast, active, setActive, isLoadingWeather, isLoadingForecast } = useWeatherStore();
	const [selected, setSelected] = useState(listCity[0]);

	useEffect(() => {
			loadWeather(selected.id);
			loadForecast(selected.id);
	}, [selected])

	const handleClick = (item) => setActive(item);

    const showLoading = isLoadingWeather || isLoadingForecast|| !weather || !forecast;

    return (
        <div className="container">
            <div className="row mb-5">
                <h1>Pronóstico</h1>
            </div>

            <div className="row mb-5">
                <Selector list={listCity} selected={selected} setSelected={setSelected} />
            </div>

            <div className="row mb-4">
                {showLoading && (<Loading />)}

                {!showLoading && (
                    <>
                        <h4>{weather.name.toUpperCase()}</h4>

                        <div className="row row-cards">
                            <Card type="today" item={weather} onClick={() => handleClick(weather)} isActive={weather.dt === active?.dt} />

                            {forecast.list.map((item, i) => (
                                <Card key={i} type="forecast" item={item} onClick={() => handleClick(item)} isActive={item.dt === active?.dt} />
                            ))}	
                        </div>
                    </>
                )}
            </div>
        </div>
    )
};
