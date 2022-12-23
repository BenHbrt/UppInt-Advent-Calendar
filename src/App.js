import './App.scss';
import Window from './Components/Window';
import dayData from './DataAndFunctions/DayData';
import getToday from './DataAndFunctions/GetToday';
import Content from './Components/Content';
import Credits from './Components/Credits';
import CreditsButton from './Components/CreditsButton';
import Naughty from './Components/Naughty';
import ChristmasDay from './Components/ChristmasDay';
import checkChristmas from './DataAndFunctions/CheckChristmas';
import isDemo from './DataAndFunctions/IsDemo';
import { useState, useRef, useEffect } from 'react';

function App() {

  const today = getToday()
  const [display, setDisplay] = useState(checkChristmas(today))
  const [content, setContent] = useState(null)
  const openedToday = useRef(false)
  const demo = isDemo()

  
  
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
        {demo && <div className='calendar_banner_demo'><span>This is a demo, with the date as 10 Dec.</span></div>}
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
      <div className={`${display === "Christmas" ? "" : "hidden"} calendar_christmas`}>
        <ChristmasDay setDisplay={setDisplay} />
      </div>
    </div>
  );
}

export default App;
