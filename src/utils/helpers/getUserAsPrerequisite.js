import store from 'store';
import { PRELOGIN_PATHS } from 'utils/enums/constants';
import * as userActions from 'store/actions/user';

const getUserAsPrerequisite = ({ path, replace, homeUrl }) => {
    store.dispatch(userActions.getUser()).then(() => {
        if (PRELOGIN_PATHS.includes(path)) {
            replace(homeUrl);
        }
    });
};

export default getUserAsPrerequisite;