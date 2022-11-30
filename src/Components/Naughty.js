import './Naughty.scss';
import CloseButton from './CloseButton';

const Naughty = ({ setDisplay }) => {
    return (
        <div className="naughty">
            <CloseButton func={() => setDisplay("Calendar")} />
            <div className='naughty_text'>
                <span className="naughty_text_first">Naughty, naughty!</span>
                <span>You have to wait to open this one!</span>
            </div>
            <img className="TR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="TL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
        </div>
    )
}
export default Naughty;