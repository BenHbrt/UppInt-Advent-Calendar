import './Window.scss';
import { useState } from 'react'
import checkDate from '../DataAndFunctions/CheckDay';
import generateDate from '../DataAndFunctions/GenerateDate';

const Window = ({ data, setContent, setDisplay }) => {

    const [open, setOpen] = useState(checkDate(data.date))
    // const today = new Date()
    // const today = new Date("2022-12-06")
    const today = generateDate()

    const openWindow = () => {
        
        if (today.getDate() === data.date) {
            setOpen(true)
            setContent(data)
            setDisplay("Content")
        } else {
            setDisplay("Naughty")
        }
        
    }

    const displayContent = () => {
        setContent(data)
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