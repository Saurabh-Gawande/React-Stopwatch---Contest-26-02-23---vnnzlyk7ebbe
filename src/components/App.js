import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef("0.000");
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  function start(){
    intervalRef.current = setInterval(()=>{
      setCurrentTime((prevTime)=>{
        const newTime = (parseFloat(prevTime) + 0.01).toFixed(3);
        return newTime;
      })
    }, 10)
    // console.log(startTime.current)
  }

  function stop(){
  clearInterval(intervalRef.current);
  }

  function lap(){
    const laptime = currentTime;
    setLaps(prev => [...prev, laptime]);
    // console.log(laps)
  
  }

  function reset(){
   clearInterval(intervalRef.current);
   setLaps([]);
   setCurrentTime(0.000);
  }

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{currentTime==0 ? startTime.current : currentTime}</h1>
        <section className='buttons'>
          <button className="start-btn" onClick={start}>START</button>
          <button className="stop-btn" onClick={stop}>STOP</button>
          <button className="lap-btn" onClick={lap}>LAP</button>
          <button className="reset-btn" onClick={reset}>RESET</button>
        </section>
      </section>
      {laps.length > 0 && (
        <section className='lap-section'>
          <h2>Laps</h2>
          <section className='laps'>
            {laps.map((ele, index)=>{
              return  <p key={index}>{ele}</p>
            })}
          </section>
        </section>
      )}
    </div>
  )
}


export default App;
