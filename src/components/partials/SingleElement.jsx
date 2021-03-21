import React from 'react';
import styles from './styles/SingleElement.scss';

const SingleElement = ({singleElement}) => (
    <div class={styles.container}>
        <h3>{singleElement.get('title')}</h3>
        <p>{singleElement.get('body')}</p>
    </div>
);

export default (SingleElement);
