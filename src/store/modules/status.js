import createStatusReducer from '../reducerFactories/createStatusReducer';
import { GET_DATA } from 'store/actions/data';

export default createStatusReducer([
    { action: GET_DATA },
]);