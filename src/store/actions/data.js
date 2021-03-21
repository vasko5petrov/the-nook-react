import dataApi from '../../api/dataApi';

export const GET_DATA = 'data/GET_DATA';

export const loadData = () => {
    return {
        type: GET_DATA, 
        payload: dataApi.getData()
    }
};