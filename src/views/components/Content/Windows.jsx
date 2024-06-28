import mailbox from '../../../assets/img/mailbox.png'
import { useCursor } from '../Cursor/CursorContext';

export default function Windows(){
    const { setIsHoveringWhite } = useCursor();

    return(
        <>
            <div className="navbar" >
                <div className="brand">Rizki Malik</div>
                <ul>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div className="contact"
                    onMouseEnter={() => setIsHoveringWhite(true)}
                    onMouseLeave={() => setIsHoveringWhite(false)}
                >
                    <a className="link-contact" href="#">
                        <div className="status">
                            <img src={mailbox} alt="icon" width="20px"/>
                            Available for new projects.
                        </div>
                        <button className="contact-button">Contact me</button>
                    </a>
                </div>
            </div>
        </>
    )
}