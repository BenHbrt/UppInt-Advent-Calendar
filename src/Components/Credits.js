import './Credits.scss'
import CloseButton from './CloseButton';

const Naughty = ({ setDisplay }) => {
    return (
        <div className="credits">
            <h2>Credits</h2>
            <CloseButton func={() => setDisplay("Calendar")} />
            <img className="TR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BR" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="BL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <img className="TL" src={require('../Images/holly-g5eb13151e_640.png')} alt=""/>
            <p>I wrote this app as part of my coding portfolio, which can be found at <a href="https://github.com/BenHbrt">https://github.com/BenHbrt</a>.</p>
            <p>The inspiration for this project came as a result of brainstorming app ideas with a friend of mine, Renee Selikowitz, over breakfast, as well as my background in English langauge teaching.</p>
            <p>The images used in this project were taken from <a href="https://pixabay.com/">pixabay.com</a>, and direct links to them can be found below.</p>
                <a href="https://pixabay.com/photos/christmas-background-flat-lay-1911637/"><img src={require("../Images/hd-wallpaper-g96f4c3791_1280.jpg")} alt="Christmas" /></a>
                <a href="https://pixabay.com/vectors/holly-ilex-leaves-thorny-spiky-152061/"><img src={require("../Images/holly-g5eb13151e_640.png")} alt="Holly" /></a>
            <p>The icons and 'Mountains of Christmas' font used in this project (featured below) were taken from <a href="https://fonts.google.com/">fonts.google.com</a>.</p>
            <div className="credits_icons">
                <img src={require('../Images/calendar_month_FILL0_wght400_GRAD0_opsz48.png')} alt="Calendar icon"></img>
                <img src={require('../Images/cancel_FILL0_wght400_GRAD0_opsz48.png')} alt="Calendar icon"></img>
                <img src={require('../Images/cancel_FILL1_wght400_GRAD0_opsz48.png')} alt="Calendar icon"></img>
                <img src={require('../Images/play_circle_FILL1_wght400_GRAD0_opsz48.png')} alt="Calendar icon"></img>
                <span>Sample text</span>
            </div>
        </div>
    )
}
export default Naughty;