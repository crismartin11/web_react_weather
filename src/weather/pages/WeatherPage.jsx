import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import weatherApi from './../../api/weatherApi';
import { useWeatherStore } from './../../hooks/useWeatherStore';
import Navbar from './../components/Navbar';
import Selector from './../components/Selector';
import Card from './../components/Card';

const listCity = [
	{id: 3427212, name: "Partido de Zárate"},
	{id: 3427213, name: "Zárate"},
	{id: 3427215, name: "Zapiola"}
];

export const WeatherPage = (props) => {
	const { weather, loadWeather, forecast, loadForecast, active, setActive } = useWeatherStore();
	const [selected, setSelected] = useState(listCity[0]);

	useEffect(() => {
			loadWeather(selected.id);
			loadForecast(selected.id);
	}, [selected])

	const handleClick = (item) => setActive(item);

	if (!weather || !forecast) {
		return (<div className="App">...loading</div>)
	}	
	//console.log("weather", weather);
	//console.log("forecast", forecast);

	return (
		<div className="App">
			<Navbar />

			<div className="container">
				<h1>Select a city</h1>
				<Selector list={listCity} selected={selected} setSelected={setSelected} />
			</div>

			<div className="container">
				<p>here the body</p>
				<b>{weather.name} (id: {forecast.city?.id})</b>	
	
				<div className="row">
					{weather && (
						<div className="col-sm-2">
							<Card item={weather} onClick={() => handleClick(weather)} isActive={weather.dt === active?.dt} />
						</div>
					)}

					{forecast && (
						forecast.list.map((item, i) => (
							<div className="col-sm-2" key={i}>
								<Card item={item} onClick={() => handleClick(item)} isActive={item.dt === active?.dt} />
							</div>
						))
					)}	
				</div>
			</div>

			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>

		</div>
	)
};
