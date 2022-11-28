import './App.scss';
import Window from './Components/Window';
import dayData from './DataAndFunctions/DayData';
import getToday from './DataAndFunctions/GetToday';
import Message from './Components/Message';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState("")

  const today = getToday()

  
  return (
    <div className="calendar">
      <div className='calendar_banner'>
        <h1>React Advent Calendar</h1>
        <h2>{today}</h2>
      </div>
      <div className='calendar_message'>
        {message && <Message message={message}/>}
      </div>
      <div className="calendar_container">
        {dayData.map((day, i) => {
          return <Window key={i} data={day} setMessage={setMessage}/>
        })}
      </div>
    </div>
  );
}

export default App;
