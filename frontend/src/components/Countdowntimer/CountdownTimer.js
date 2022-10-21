import {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
            <>
                <div>
                    <div className='banners__banner-time-text'>{remainingTime.days}</div>
                    <span className='banners__banner-time-text_size_s'>days</span>
                </div>
                <div>
                    <div className='banners__banner-time-text'>{remainingTime.hours}</div>
                    <span className='banners__banner-time-text_size_s'>hours</span>
                </div>
                <div>
                    <div className='banners__banner-time-text'>{remainingTime.minutes}</div>
                    <span className='banners__banner-time-text_size_s'>minutes</span>
                </div>
                <div>
                    <div className='banners__banner-time-text'>{remainingTime.seconds}</div>
                    <span className='banners__banner-time-text_size_s'>seconds</span>
                </div>
            </>
    );
}

export default CountdownTimer;