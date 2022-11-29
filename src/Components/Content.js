import './Content.scss'
import CloseButton from './CloseButton';

const Content = ({ content, setDisplay }) => {

    const playAudio = (name) => {
        new Audio(require(`../Audio/Phonemes/${name}`)).play();
    }

    const playExAudio = (date, name) => {
        new Audio(require(`../Audio/${date}/${name}`)).play();
    }

    return (
        <div className="content">
            
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="TR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BR" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="BL" src={require('../Images/mistletoe.png')} alt=""/>
            <img className="TL" src={require('../Images/mistletoe.png')} alt=""/>
            
            <div className='content_phoneme'>
                <div className="content_phoneme_heading">
                    <span>{content.data.phoneme.symbol}</span>
                    <img className="content_phoneme_playicon" src={require('../Images/play_circle_FILL1_wght400_GRAD0_opsz48.png')} alt="" onClick={() => playAudio(content.data.phoneme.audio)}/>
                </div>
                <div className="content_phoneme_text">Can you hear /{content.data.phoneme.symbol}/ in these words?</div>
                {content.data.phoneme.examples.map(example => {
                    return <div className="content_audioex"><strong>{example[0]}</strong> {example[1]} <img className="content_audioex_playicon" src={require('../Images/play_circle_FILL1_wght400_GRAD0_opsz48.png')} alt="" onClick={() => playExAudio(content.date, example[2])}/></div>
                    })
                }   
            </div>
            <div className='content_divider'></div>
            <div className='content_question'>
                <h2>Question</h2>
            </div>
        </div>
    )
}
export default Content;