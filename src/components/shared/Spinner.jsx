import React from 'react';
import classnames from 'classnames';
import style from './styles/Spinner.scss';

const Spinner = ({color}) => {
    const spinnerStyles = classnames(style.loading, {[style.whiteLoading]: color === 'white'});
    return <div className={spinnerStyles}></div>
};

export default Spinner;
