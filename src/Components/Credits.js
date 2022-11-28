// import './Credits.scss'
import CloseButton from './CloseButton';

const Credits = ({ setDisplay }) => {
    return (
        <div className="content">
            <h2>Credits</h2>
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="TR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BL" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="TL" src={require('../Images/mistletoe.png')} alt=""/>
        </div>
    )
}
export default Credits;