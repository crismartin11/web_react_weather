import { Navigate, Routes, Route } from 'react-router-dom';
import { WeatherPage } from './../weather';

export const AppRouter = () => {
  	return (
    	<Routes>
			<Route path="/" element={ <WeatherPage /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
    	</Routes>
  	)
};
