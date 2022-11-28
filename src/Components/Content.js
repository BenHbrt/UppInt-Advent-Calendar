import './Content.scss'
import CloseButton from './CloseButton';
import audio from '../Audio/TestRecording.m4a'

const Content = ({ content, setDisplay }) => {

    const playAudio = () => {
        new Audio(audio).play();
    }

    return (
        <div className="content">
            <h2>{content}</h2>
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="TR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BL" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="TL" src={require('../Images/mistletoe.png')} alt=""/>
            <span>Audio</span>
            <img className="play" src={require('../Images/play_circle_FILL1_wght400_GRAD0_opsz48.png')} onClick={playAudio}/>
        </div>
    )
}
export default Content;