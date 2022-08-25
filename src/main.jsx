import ReactDOM from 'react-dom/client';

import './styles.scss';
import { WeatherApp } from './WeatherApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <WeatherApp />
  // </React.StrictMode>
)
