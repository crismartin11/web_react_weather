
const time = "15:00:00";

export const getForecastList = ( list ) => list.filter(x => x.dt_txt.indexOf(time) > -1);