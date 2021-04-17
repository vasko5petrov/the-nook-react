import createStatusReducer from '../reducerFactories/createStatusReducer';
import { GET_DATA } from 'store/actions/data';
import { LOGIN } from 'store/modules/loginForm';

export default createStatusReducer([
    { action: GET_DATA },
    { action: LOGIN },
]);