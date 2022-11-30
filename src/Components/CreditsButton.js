import './CreditsButton.scss'

const CreditsButton = ({ setDisplay }) => {
    return (
        <div className="creditsbutton" onClick={() => setDisplay("Credits")}>Credits</div>
    )
}
export default CreditsButton