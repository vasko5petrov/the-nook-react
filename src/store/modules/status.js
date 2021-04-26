import createStatusReducer from '../reducerFactories/createStatusReducer';
import { GET_DATA } from 'store/actions/data';
import { GET_USER, VERIFY_EMAIL } from 'store/actions/user';

export default createStatusReducer([
    { action: GET_DATA },
    { action: GET_USER },
    { action: VERIFY_EMAIL }
]);