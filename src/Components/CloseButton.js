import { useState } from 'react'
import './CloseButton.scss'

const CloseButton = ({ func }) => {

    const [hover, setHover] = useState(false)

    return (
        <div className="closebutton" onClick={func} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? 
            <img src={require('../Images/cancel_FILL1_wght400_GRAD0_opsz48.png')} alt=""/>
            :
            <img src={require('../Images/cancel_FILL0_wght400_GRAD0_opsz48.png')} alt=""/>
            }
        </div>
    )
}
export default CloseButton;