import './Contact.sass'
import emailJs from '@emailjs/browser'
import insta from '../../assets/imgs/icons/instagram.png'
import linkedin from '../../assets/imgs/icons/linkedin.png'
import github from '../../assets/imgs/icons/github.png'
import { useState } from 'react'

let enviado = ""

export default function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    

    const enviarEmail = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert("Por favor, preencha todos os campos!")
            return
        }

        const tampleteParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailJs.send("service_a5m946a", "template_0loaaoc", tampleteParams, "n8K7Fw5yMMcF9s3tU")
        .then((response) => {
            console.log("Email enviado!", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
            enviado = "Mensagem enviada!"
        }, (err) => {
            console.log("Erro: ", err);
        })
    }

    return(
        <section className="container__contact">
            <h2>SEND ME YOUR MESSAGE</h2>
            <form className='form' onSubmit={enviarEmail}>
                <input type="text" placeholder='Name' onChange={(e)=> setName(e.target.value)} value={name}/>
                <input type="email" name="" id="" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <textarea name="" id="" cols="30" rows="8" placeholder='Message' onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                <button type="submit">SEND</button>
                <h4>{enviado}</h4>
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