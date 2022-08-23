import { Navigate, Routes, Route } from 'react-router-dom';
import { WeatherPage } from './../weather';

export const AppRouter = () => {
  	return (
    	<Routes>
			<Route path="/weather" element={ <WeatherPage /> } />
            <Route path="/*" element={ <Navigate to="/weather" /> } />
    	</Routes>
  	)
};
