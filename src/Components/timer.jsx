// import { useState } from "react";


// const Timer = () => {

//     const [hours, setHours] = useState("");
//     const [updateTime, setUpdatetime] = useState("");
//     const [mins, setMins] = useState("");
//     const [secs, setSecs] = useState("")

//     const handleTime = (e) => {
//         setHours(Math.floor(e.target.value));
//         setMins(60);
//         setSecs(60);
//     }

//     const handleUpdatetime = (e) => { 
//          if (e.key === "Enter") {
//             setUpdatetime(Math.floor(hours));
//          }
//     }

    


//     return (
//         <div>
//             <h1>Countdown Timer</h1>
//             <input type={"text"} id="timeCount" onChange={handleTime} onKeyDown={handleUpdatetime} placeholder="Enter the hour"/>
//             <div id="current-time" style={{marginTop: '20px'}} >Time:-  {hours} hr : {mins} mins : {secs} secs</div>
//         </div>
//     )
// }

// export default Timer;

