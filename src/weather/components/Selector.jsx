import React from "react";
import { array, object, func } from "prop-types";

export const Selector = ({ list, selected, setSelected }) => {
    const handleChange = (event) => setSelected(list.find(x => x.id === parseInt(event.target.value)));

    return (
        <form>
            <div className="form-group">
                <label htmlFor="cities">Seleccione una ciudad</label>
                <select className="form-control" id="cities" onChange={handleChange}>
                    {list && (
                        list.map(element => <option key={element.id} value={element.id}>{element.name}</option>)
                    )}
                </select>
            </div>
        </form>
    );
};

Selector.propTypes = {
    list: array,
    selected: object,
    setSelected: func
};
