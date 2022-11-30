import './Content.scss'
import { useState } from 'react';
import CloseButton from './CloseButton';

const Content = ({ content, setDisplay }) => {

    const [result, setResult] = useState("INCORRECT")

    const playAudio = (name) => {
        new Audio(require(`../Audio/Phonemes/${name}`)).play();
    }

    const playExAudio = (date, name) => {
        new Audio(require(`../Audio/${date}/${name}`)).play();
    }

    return (
        <div className="content">
            
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="TR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="TL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            
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
                <br/>
                <span className='content_phoneme_note'>{content.data.phoneme.note}</span>   
            </div>
            <div className='content_divider'></div>
            <div className='content_question'>
                <h2>Question</h2>
                <span>{content.data.question.stem}</span><br/><br/>
                <div className='content_question_container'>
                    <div className="content_question_answers">
                        <span className="content_question_answer"><strong>A:</strong> {content.data.question.A}</span><br/>
                        <span className="content_question_answer"><strong>B:</strong> {content.data.question.B}</span><br/>
                        <span className="content_question_answer"><strong>C:</strong> {content.data.question.C}</span>
                    </div>
                    <div className='content_question_control'>
                        <span className={`content_question_result${result === "CORRECT" ? "-correct" : (result === "INCORRECT" ? "-incorrect" : "")}`}><strong>{result}</strong></span>
                        <span className="content_question_button">Check Answer</span>
                    </div>
                </div>
                <span className="content_question_note">{content.data.question.note}</span>
            </div>
        </div>
    )
}
export default Content;