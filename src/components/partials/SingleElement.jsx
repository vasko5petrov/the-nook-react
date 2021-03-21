import React from 'react';

const SingleElement = ({singleElement}) => (
    <div>
        <h3>{singleElement.get('title')}</h3>
        <p>{singleElement.get('body')}</p>
    </div>
);

export default (SingleElement);
