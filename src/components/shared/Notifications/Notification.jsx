import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import * as uiActions from 'store/actions/ui';
import style from './styles/Notifications.scss';

const Notification = ({ message, type, expiration = 4000, id }) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const dispatch = useDispatch();

    const intervalTime = expiration / (100 / 0.5);
  
    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth(prev => {
            if (prev < 100) {
                return prev + 0.5;
            }
    
            clearInterval(id);
            return prev;
            });
        }, intervalTime);
    
        setIntervalId(id);
    };
  
    const handlePauseTimer = () => {
        clearInterval(intervalId);
    };
  
    const handleCloseNotification = () => {
        handlePauseTimer();
        setExit(true);
        setTimeout(() => {
            dispatch(uiActions.removeNotification(id));
        }, 400)
    };
  
    useEffect(() => {
        if (width === 100) {
            handleCloseNotification();
        }
    }, [width])
  
    useEffect(() => {
        handleStartTimer();
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const notficationStyles = classnames(style.notificationItem,
        {
            [style.success]: type === 'SUCCESS',
            [style.error]: type === 'ERROR',
            [style.exit]: exit
        }
    );
    return (
        <div class={notficationStyles} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
            <div onClick={handleCloseNotification} class={style.closeButton}>X</div>
            <p>{message}</p>
            <div class={style.expirationBar} style={{width: `${width}%`}}></div>
        </div>
    )
}

export default Notification;
