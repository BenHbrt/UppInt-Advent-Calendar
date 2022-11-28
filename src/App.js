import './App.scss';
import Window from './Components/Window';
import dayData from './DataAndFunctions/DayData';
import getToday from './DataAndFunctions/GetToday';
import Content from './Components/Content';
import { useState, useRef } from 'react';

function App() {

  const [display, setDisplay] = useState("Calendar")
  const [content, setContent] = useState(null)
  const openedToday = useRef(false)

  const today = getToday()

  
  return (
    <div className="calendar">
      <div className='calendar_banner'>
        <h1>Upp-Int Advent Calendar</h1>
        <h2>{today}</h2>
      </div>
      <div className={`${display === "Calendar" ? "" : "hidden"} calendar_container`}>
        {dayData.map((day, i) => {
          return <Window key={i} data={day} setDisplay={setDisplay} setContent={setContent} openedToday={openedToday} />
        })}
      </div>
      <div className={`${display === "Content" ? "" : "hidden"} content_container`}>
        <Content content={content} setDisplay={setDisplay} display={display} />
      </div>
    </div>
  );
}

export default App;
