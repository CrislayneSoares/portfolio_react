import './Contact.sass'
import insta from '../../assets/imgs/icons/instagram.png'
import linkedin from '../../assets/imgs/icons/linkedin.png'
import github from '../../assets/imgs/icons/github.png'

export default function Contact(){
    return(
        <section className="container__contact">
            <h2>SENDE ME YOUR MESSAGE</h2>
            <form className='form' action="POST">
                <input type="text" name="" id="" placeholder='Name'/>
                <input type="email" name="" id="" placeholder='Email' />
                <textarea name="" id="" cols="30" rows="8" placeholder='Message'></textarea>
                <button type="submit">SEND</button>
            </form>
            
            <h2>SOCIAL</h2>
            <nav className='saciais-contact'>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/crislayne-ramos-9650b51a2/" target='_blank' rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a></li>
                            <li><a href="https://github.com/CrislayneSoares" target='_blank' rel="noreferrer"><img src={github} alt="GitHub" /></a></li>
                            <li><a href="https://www.instagram.com/crissoaresr/" target='_blank' rel="noreferrer"><img src={insta} alt="Instagram" /></a></li>
                        </ul>
                    </nav>
        </section>
    )
}