import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as dataActions from 'store/actions/data';

const mapStateToProps = () => ({});

const DataLoader = ({dispatch, children}) => {
    useEffect(() => {
        dispatch(dataActions.loadData());
    }, []);

    return children;
};

export default connect(mapStateToProps)(DataLoader);
