import './Contact.sass'
import insta from '../../assets/imgs/icons/instagram.png'
import linkedin from '../../assets/imgs/icons/linkedin.png'
import github from '../../assets/imgs/icons/github.png'

export default function Contact(){
    return(
        <section className="container__contact">
            <h2>SENDE ME YOUR MESSAGE</h2>
            <form className='form' action="POST">
                <input type="text" name="" id="" placeholder='Nome'/>
                <input type="email" name="" id="" placeholder='Email' />
                <textarea name="" id="" cols="30" rows="8" placeholder='Message'></textarea>
                <button type="submit">SEND</button>
            </form>
            
            <h2>SOCIAL</h2>
            <nav className='saciais-contact'>
                        <ul>
                            <li><img src={linkedin} alt="LinkedIn" /></li>
                            <li><img src={github} alt="GitHub" /></li>
                            <li><img src={insta} alt="Instagram" /></li>
                        </ul>
                    </nav>
        </section>
    )
}