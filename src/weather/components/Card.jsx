import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const Card = ({type, item, onClick, isActive}) => {
    const { dt_txt, weather, main } = item;
    const { temp, feels_like, temp_min, temp_max } = main;

    const date = new Date(dt_txt);

    const src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //TODO: in helper

    const getFormatedTemp = (tempParam) => tempParam.toLocaleString(undefined, {maximumFractionDigits:1});

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-4">
            <div className={`card day ${isActive && "active"} ${type}`} onClick={onClick} >
                <div className="card-body">

                    <div className="when mb-3">
                        <span className="day">{type==="today" ? "HOY" : format(date, 'EEEE', {locale: es})}</span>
                        <span className="date">{format(date, 'dd-MM')}</span>
                    </div>

                    <div className="icon mb-3">
                        <img id={weather[0].icon} src={src} alt={weather[0].icon} />
                    </div>

                    <div className="temperature">
                            <b>{type==="today" ? `T. ${getFormatedTemp(temp)}°` : ""}</b>
                    </div>
                    <div className="temperature feels-like mb-3">
                            <span>{type==="today" ? `St. ${getFormatedTemp(feels_like)}°` : ""}</span>
                    </div>

                    {/* <div className="minmax label">
                        <span className="min">Rango de T</span>
                    </div> */}
                    <div className="item minmax mb-2">
                        <label>Rango de T</label>
                        <span className="min">{getFormatedTemp(temp_min)}°</span> / <span className="max">{getFormatedTemp(temp_max)}°</span>
                    </div>

                    <div className="item humidity mb-2">
                        <label>Humedad</label>
                        <span>{main.humidity} %</span>
                    </div>

                    <div className="item pressure">
                        <label>Presión at.</label>
                        <span>{main.pressure} hPa</span>
                    </div>

                </div>
            </div>
        </div>
    )
};
