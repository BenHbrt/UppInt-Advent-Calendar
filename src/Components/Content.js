import './Content.scss'

const Content = ({ content, setDisplay }) => {
    return (
        <div className="content">
            <h2>{content}</h2>
            <button onClick={() => setDisplay("Calendar")}>Close</button>
            <img className="TR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BL" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="TL" src={require('../Images/mistletoe.png')} alt=""/>
        </div>
    )
}
export default Content;