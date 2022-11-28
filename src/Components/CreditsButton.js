import './CreditsButton.scss'

const CreditsButton = ({ setDisplay }) => {
    return (
        <span className="creditsbutton" onClick={() => setDisplay("Credits")}>Credits</span>
    )
}
export default CreditsButton