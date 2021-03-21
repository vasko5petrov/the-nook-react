import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
    data: store.data.get('data')
});

const DataProvider = ({data, children}) => {
    return data ? children(data) : null;
};

export default connect(mapStateToProps)(DataProvider);
