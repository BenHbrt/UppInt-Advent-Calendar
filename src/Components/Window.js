import './Window.scss';
import { useState } from 'react'
import checkDate from '../DataAndFunctions/CheckDay';

const Window = ({ data, setContent, setDisplay }) => {

    const [open, setOpen] = useState(checkDate(data.date))
    const today = new Date("2022-12-06")

    const openWindow = () => {
        
        if (today.getDate() === data.date) {
            setOpen(true)
            setContent("TEXT")
            setDisplay("Content")
        } else {
            setContent("Naughty, naughty! You have to wait to open this one!")
            setDisplay("Content")
        }
        
    }

    const displayContent = () => {
        setContent("TEXT")
        setDisplay("Content")
    }

    return (
        <>
        {(!open)&& <div className="window closed" onClick={openWindow}>
            <span>{data.date}</span>
        </div>}
        {(open) && <div className="window open" onClick={displayContent}>
            <span>{data.data.phoneme.symbol}</span>
        </div>}
        </>
    )
}
export default Window;