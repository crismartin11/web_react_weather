import { format } from 'date-fns';

const Card = ({item, onClick, isActive}) => {
    const date = new Date(item.dt_txt);

    return (
        <div className={`card ${isActive && "active"}`} onClick={onClick} >
            <div className="card-body">
                <h5 className="card-title">{format(date, 'EEEE')}</h5>
                <p className="card-text">{format(date, 'dd-MM')}</p>

                <div className="">{item.weather[0].icon}</div>{/*  icono */}
                
                <br />
                <div className="">
                    <label>Temp.</label>
                    <span>{item.main.temp}</span>
                </div>

                <br />
                <div className="">
                    <label>Temp. min/max</label>
                    <span>{item.main.temp_min}/{item.main.temp_max}</span>
                </div>
                
                <br />
                <div className="">
                    <label>Sens. térmica</label>
                    <span>{item.main.feels_like}</span>
                </div>

                <br />
                <div className="">
                    <label>Humedad</label>
                    <span>{item.main.humidity}</span>
                </div>

                <br />
                <div className="">
                    <label>Presión</label>
                    <span>{item.main.pressure}</span>
                </div>

            </div>
        </div>
    )
};

export default Card;
