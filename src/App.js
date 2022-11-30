import './App.scss';
import Window from './Components/Window';
import dayData from './DataAndFunctions/DayData';
import getToday from './DataAndFunctions/GetToday';
import Content from './Components/Content';
import Credits from './Components/Credits';
import CreditsButton from './Components/CreditsButton';
import Naughty from './Components/Naughty';
import { useState, useRef } from 'react';

function App() {

  const [display, setDisplay] = useState("Calendar")
  const [content, setContent] = useState(null)
  const openedToday = useRef(false)

  const today = getToday()

  
  return (
    <div className="calendar">
      <div className='calendar_banner'>
        <div className="calendar_banner_title">
          Upp-Int Advent Calendar
        </div>
        <div className='calendar_banner_content'>
          <h2>{today}</h2>
          {(display !== "Credits") && <CreditsButton setDisplay={setDisplay} />}
        </div>
      </div>
      <div className={`${display === "Calendar" ? "" : "hidden"} calendar_container`}>
        {dayData.map((day, i) => {
          return <Window key={i} data={day} setDisplay={setDisplay} setContent={setContent} openedToday={openedToday} />
        })}
      </div>
      <div className={`${display === "Content" ? "" : "hidden"} calendar_content`}>
        {content && <Content content={content} setDisplay={setDisplay} display={display} />}
      </div>
      <div className={`${display === "Naughty" ? "" : "hidden"} calendar_naughty`}>
        <Naughty setDisplay={setDisplay} />
      </div>
      <div className={`${display === "Credits" ? "" : "hidden"} calendar_credits`}>
        <Credits setDisplay={setDisplay} />
      </div>
    </div>
  );
}

export default App;
