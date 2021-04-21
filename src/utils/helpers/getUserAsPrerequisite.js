import store from 'store';
import * as userActions from 'store/actions/user';

const getUserAsPrerequisite = ({ path, replace, homeUrl }) => {
    store.dispatch(userActions.getUser()).then(() => {
        if (path === '/signup' || path === '/login') {
            replace(homeUrl);
        }
    });
};

export default getUserAsPrerequisite;