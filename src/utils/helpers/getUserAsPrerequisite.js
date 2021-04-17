import store from 'store';
import * as userActions from 'store/actions/user';

const getUserAsPrerequisite = ({ path, replace, homeUrl }) => {
    store.dispatch(userActions.getUser()).then(() => {
        if (path === '/signup' || path === '/login') {
            replace(homeUrl);
        }
    }).catch((error) => {
        if (error.response.status === 403 && path.startsWith('/user')) {
            replace(homeUrl);
        }
    })
};

export default getUserAsPrerequisite;