import './Message.scss'

const Message = ({ message }) => {
    return (
        <div className="message">
            <h2>{message}</h2>
            <img className="TR" src='./Images/mistletoe.png' />
            <img className="BR" src='./Images/mistletoe.png' />
            <img className="BL" src='./Images/mistletoe.png' />
            <img className="TL" src='./Images/mistletoe.png' />
        </div>
    )
}
export default Message;