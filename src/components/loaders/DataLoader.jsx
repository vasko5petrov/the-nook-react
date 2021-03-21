import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from 'components/shared/Spinner';
import * as statusChecker from 'utils/helpers/statusChecker';
import * as dataActions from 'store/actions/data';

const mapStateToProps = (store) => ({
    getDataStatus: store.status.getIn(['getData', 'status'])
});

const DataLoader = ({getDataStatus, dispatch, children}) => {
    useEffect(() => {
        if (statusChecker.shouldLoad(getDataStatus)) {
            dispatch(dataActions.loadData());
        }
    }, []);

    const shouldRender = statusChecker.isLoaded(getDataStatus);

    return shouldRender ? children : <Spinner />;
};

export default connect(mapStateToProps)(DataLoader);
