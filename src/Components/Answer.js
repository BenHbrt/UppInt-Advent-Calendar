import './Answer.scss'

const Answer = ({ name, text, answer, result, selectedAnswer, setSelectedAnswer }) => {
    return (
        <span className={`answer${(selectedAnswer === name && result === "NONE") ? "-selected" : ""}${result !== "NONE" && answer === name ? "-correct" : ""}${result === "INCORRECT" && name === selectedAnswer ? "-incorrect" : ""}`} onClick={() => setSelectedAnswer(name)}>
            <strong>{name}:</strong> {text}
        </span>
    )
}
export default Answer;