import React, { useState, useEffect } from 'react';
import style from './CountdownTimer.module.css'

const CountdownTimer = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null
        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    const handleStartTimer = () => {
        setTimerOn(true);
    };

    const handleStopTimer = () => {
        setTimerOn(false);
    };

    const handleTimeChange = (event) => {
        setTime(parseInt(event.target.value));
    };

    return (
        <div className={style.timerBox}>
            <h2>Countdwn Timer</h2>
            <input type="number" value={time} onChange={handleTimeChange} />
            <div className={style.buttonDiv}>
                <button onClick={handleStartTimer} className={style.start}>Start</button>
                <button onClick={handleStopTimer} className={style.stop}>Stop</button>
            </div>
            <p>{time} seconds</p>
        </div>
    );
};

export default CountdownTimer;
