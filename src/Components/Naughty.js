import './Naughty.scss';
import CloseButton from './CloseButton';

const Naughty = ({ setDisplay }) => {
    return (
        <div className="naughty">
            <h2>Naughty, naughty! You have to wait to open this one!</h2>
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="TR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="TL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
        </div>
    )
}
export default Naughty;