import { format } from 'date-fns';

export const getForecastList = ( list ) => {

    const existInArray = (listParam, str) => {
        const strList = JSON.stringify(listParam);
        return strList.indexOf(str) > -1;
    }

    let customList = [];
    list.forEach(item => {
        if (!existInArray(customList, item.dt_txt.split(" ")[0])) customList.push({...item});
    });
    return customList;
}