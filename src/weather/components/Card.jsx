import React from "react";
import { string, object, func, bool } from "prop-types";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useWeatherStore } from "./../../hooks/useWeatherStore";

export const Card = ({ type, item, onClick, isActive }) => {
    const { dt_txt, weather, main } = item;
    const { temp, feels_like, temp_min, temp_max, humidity, pressure } = main;

    const { getUrlIconApi } = useWeatherStore();

    const date = new Date(dt_txt);
    const getFormatedTemp = (tempParam) => tempParam.toLocaleString(undefined, { maximumFractionDigits: 1 });

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-4">
            <div className={`card day ${isActive && "active"} ${type}`} onClick={onClick} >
                <div className="card-body">

                    <div className="when mb-3">
                        <span className="day">{type === "today" ? "HOY" : format(date, "EEEE", { locale: es })}</span>
                        <span className="date">{format(date, "dd-MM")}</span>
                    </div>

                    <div className="icon mb-3">
                        <img id={weather[0].icon} src={getUrlIconApi(weather[0].icon)} alt={weather[0].icon} />
                    </div>

                    <div className="temperature">
                        <b>{type === "today" ? `T. ${getFormatedTemp(temp)}°` : ""}</b>
                    </div>
                    <div className="temperature feels-like mb-3">
                        <span>{type === "today" ? `St. ${getFormatedTemp(feels_like)}°` : ""}</span>
                    </div>

                    <div className="item minmax mb-2">
                        <label>Rango de T</label>
                        <span className="min">{getFormatedTemp(temp_min)}°</span> / <span className="max">{getFormatedTemp(temp_max)}°</span>
                    </div>

                    <div className="item humidity mb-2">
                        <label>Humedad</label>
                        <span>{humidity} %</span>
                    </div>

                    <div className="item pressure">
                        <label>Presión at.</label>
                        <span>{pressure} hPa</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    type: string,
    item: object,
    onClick: func,
    isActive: bool
};
