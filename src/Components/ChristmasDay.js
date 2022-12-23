import "./ChristmasDay.scss"
import CloseButton from "./CloseButton"

const ChristmasDay = ({ setDisplay }) => {
    return (
        <div className="christmasday">
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="christmasday_holly TR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="christmasday_holly BR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="christmasday_holly BL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="christmasday_holly TL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <div className="christmasday_title">Merry Christmas!</div>
            <div className="christmasday_text">Thank you for using this calendar! I hope you enjoyed it.</div>
            <img className="christmasday_image" src={require("../Images/santa-gac80d6d32_1920.jpg")} alt="Santa" />
        </div>
    )
}
export default ChristmasDay