import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'components/shared/Spinner';
import * as statusChecker from 'utils/helpers/statusChecker';
import * as dataActions from 'store/actions/data';

const DataLoader = ({ children }) => {
    const getDataStatus = useSelector((store) => store.status.getIn(['getData', 'status']));
    const dispatch = useDispatch();

    useEffect(() => {
        if (statusChecker.shouldLoad(getDataStatus)) {
            dispatch(dataActions.loadData());
        }
    }, []);

    const shouldRender = statusChecker.isLoaded(getDataStatus);

    return shouldRender ? children : <Spinner />;
};

export default DataLoader;
