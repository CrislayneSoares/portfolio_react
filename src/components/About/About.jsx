import './About.sass'
import Cris from '../../assets/crissoares.png'
import HTML from '../../assets/imgs/icons/html.png'
import CSS from '../../assets/imgs/icons/css.png'
import JS from '../../assets/imgs/icons/js.png'
import REACT from '../../assets/imgs/icons/react.png'
import SASS from '../../assets/imgs/icons/sass.png'
import insta from '../../assets/imgs/icons/instagram.png'
import linkedin from '../../assets/imgs/icons/linkedin.png'
import github from '../../assets/imgs/icons/github.png'

export default function About(){
    return(
        <section className='container__about'>
            <h1>ABOUT ME</h1>

            <div className='container-perfil'>
                <figure>
                    <img className='img-perfil' src={Cris} alt="perfil" />
                </figure>
                <div>
                    <h3>MY NAME</h3>
                    <p>Crislayne Ramos</p>
                    <h3>EMAIL</h3>
                    <p>crissoares346@gmail.com</p>
                    <h3>SOCIAL</h3>
                    <nav className='saciais'>
                        <ul>
                            <li><img src={linkedin} alt="LinkedIn" /></li>
                            <li><img src={github} alt="GitHub" /></li>
                            <li><img src={insta} alt="Instagram" /></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <p className='description'>Olá, me chamo Crislayne Ramos, tenho 25 anos e atualmente estou estudando desenvolvimento web Front-end na VNW - Vai Na Web. Estou familiarizada com as tecnologias Git, GitHub, HTML5, CSS3 e Javascript. Estou estudando o frameworks Angular e a lib do React. Tenho conhecimentos básicos em Python, C++, Arduino, Java, CorelDraw e MySQL. Sou uma pessoa organizada e curiosa, sempre disposta a aprender!</p>
            
            <h2>My Habilities</h2>
            <div className='box-habilidade'>
                <figure>
                    <img src={HTML} alt="tech" />
                    <figcaption>HTML</figcaption>
                </figure>
            </div>
            <div className='box-habilidade'>
                <figure>
                    <img src={CSS} alt="tech" />
                    <figcaption>CSS</figcaption>
                </figure>
            </div>
            <div className='box-habilidade'>
                <figure>
                    <img src={JS} alt="tech" />
                    <figcaption>JS</figcaption>
                </figure>
            </div>
            <div className='box-habilidade'>
                <figure>
                    <img src={REACT} alt="tech" />
                    <figcaption>React</figcaption>
                </figure>
            </div>
            <div className='box-habilidade'>
                <figure>
                    <img src={SASS} alt="tech" />
                    <figcaption>Sass</figcaption>
                </figure>
            </div>

        </section>
    )
}