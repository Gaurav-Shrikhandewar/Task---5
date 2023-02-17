import React, { useState, useEffect } from 'react';

const Timer2 = () => {

    const [timeCount, setTimeCount] = useState(0);
    const [timer, setTimer] = useState(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const input = parseInt(event.target.value);
            const countdownTime = isNaN(input) ? 0 : Math.floor(input);
            setTimeCount(countdownTime);
            clearInterval(timer);
            setTimer(setInterval(() => {
                setTimeCount((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000));
        }
    };

    useEffect(() => {
        if (timeCount === 0) {
            clearInterval(timer);
        }
    }, [timeCount, timer]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <input id='timeCount' type="text" onKeyDown={handleKeyDown} placeholder={"Enter the number "} />
            <div id="current-time" style={{marginTop:"20px"}} > <b>{timeCount}</b></div>
        </div>
    );
}

export default Timer2;

