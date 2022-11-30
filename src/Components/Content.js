import './Content.scss'
import Answer from './Answer';
import { useState } from 'react';
import CloseButton from './CloseButton';

const Content = ({ content, setDisplay }) => {

    const [result, setResult] = useState("NONE")
    const [selectedAnswer, setSelectedAnswer] = useState("")

    const playAudio = (name) => {
        new Audio(require(`../Audio/Phonemes/${name}`)).play();
    }

    const playExAudio = (date, name) => {
        new Audio(require(`../Audio/${date}/${name}`)).play();
    }

    const checkAnswer = () => {
        if ((result === "NONE") && (selectedAnswer !== "")) {
            if (selectedAnswer === content.data.question.answer) {
                setResult("CORRECT")
            } else {
                setResult("INCORRECT")
            }
        }   
    }

    const closeWindow = () => {
        setResult("NONE");
        setSelectedAnswer("");
        setDisplay("Calendar")
    }

    return (
        <div className="content">
            
            <CloseButton func={closeWindow} />
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
                        <Answer name={"A"} text={content.data.question.A} answer={content.data.question.answer} result={result} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
                        <Answer name={"B"}  text={content.data.question.B} answer={content.data.question.answer} result={result} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
                        <Answer name={"C"}  text={content.data.question.C} answer={content.data.question.answer} result={result} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
                    </div>
                    <div className='content_question_control'>
                        <span className={`content_question_result${result === "CORRECT" ? "-correct" : (result === "INCORRECT" ? "-incorrect" : "")}`}><strong>{result}</strong></span>
                        <span className={`content_question_button${(selectedAnswer !== "") && (result === "NONE") ? "-active" : ""}`} onClick={checkAnswer}>Check Answer</span>
                    </div>
                </div>
                <div className={`content_question_note${result !== "NONE" ? "-visible" : ""}`}>{content.data.question.note}</div>
            </div>
        </div>
    )
}
export default Content;

{/* <span className={`content_question_answer${result !== "NONE" ? "-answered" : ""}${selectedAnswer === "A" ? "-selected" : ""}`} onClick={() => setSelectedAnswer("A")}><strong>A:</strong> {content.data.question.A}</span><br/>
                        <br/>
                        <span className={`content_question_answer${selectedAnswer === "C" ? "-selected" : ""}`} onClick={() => setSelectedAnswer("C")}><strong>C:</strong> {content.data.question.C}</span> */}