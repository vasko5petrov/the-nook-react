import createStatusReducer from '../reducerFactories/createStatusReducer';
import { GET_DATA } from 'store/actions/data';
import { GET_USER } from 'store/actions/user';

export default createStatusReducer([
    { action: GET_DATA },
    { action: GET_USER }
]);