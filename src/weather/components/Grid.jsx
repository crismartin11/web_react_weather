
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
        <>
            <div className="container mb-5">
                <h1 className="mb-5">Pronóstico</h1>
                <Selector list={listCity} selected={selected} setSelected={setSelected} />
            </div>
            
            <div className="container">
                {showLoading && (<Loading />)}

                {!showLoading && (
                    <>
                        <h4>{weather.name} (Id: {forecast.city?.id})</h4>

                        <div className="row">
                            <div className="col-sm-2">
                                <Card item={weather} onClick={() => handleClick(weather)} isActive={weather.dt === active?.dt} />
                            </div>

                            {forecast.list.map((item, i) => (
                                <div className="col-sm-2" key={i}>
                                    <Card item={item} onClick={() => handleClick(item)} isActive={item.dt === active?.dt} />
                                </div>
                            ))}	
                        </div>
                    </>
                )}
            </div>
        </>
    )
};
