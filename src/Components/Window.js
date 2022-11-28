import './Window.scss';
import { useState } from 'react'
import checkDate from '../DataAndFunctions/CheckDay';

const Window = ({ data, setMessage }) => {

    const [open, setOpen] = useState(checkDate(data.date))

    const openWindow = () => {
        const today = new Date("2022-12-06")
        if (today.getDate() == data.date) {
            setOpen(true)
            setMessage(data.text)
        } else {
            setMessage("Naughty, naughty! You have to wait to open this one!")
        }
        
    }

    return (
        <>
        {!open && <div className="window closed" onClick={openWindow}>
            <span>{data.date}</span>
        </div>}
        {open && <div className="window open" onClick={() => setMessage(data.text)}>
            <img src={`./Images/${data.image}`} />
        </div>}
        </>
    )
}
export default Window;