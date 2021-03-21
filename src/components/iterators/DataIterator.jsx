import React from 'react';

const DataIterator = ({data, children}) => {
    return data ? data.map((singleElement, index) => children(singleElement, index)) : null;
};

export default (DataIterator);
