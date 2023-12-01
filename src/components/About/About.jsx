import './About.sass'
import Cris from '../../assets/crissoares.png'
import HTML from '../../assets/imgs/icons/html.png'
import CSS from '../../assets/imgs/icons/css.png'
import JS from '../../assets/imgs/icons/js.png'
import REACT from '../../assets/imgs/icons/react.png'
import SASS from '../../assets/imgs/icons/sass.png'
import GIT from '../../assets/imgs/icons/git.svg'
import FIGMA from '../../assets/imgs/icons/figma.svg'
import insta from '../../assets/imgs/icons/instagram.png'
import linkedin from '../../assets/imgs/icons/linkedin.png'
import github from '../../assets/imgs/icons/github.png'
import dio from '../../assets/imgs/icons/dio.png'
import vnw from '../../assets/imgs/icons/vnw.png'
import ceep from '../../assets/imgs/icons/ceep.png'

export default function About(){
    return(
        <section className='container__about'>
            <div className='contain'>
                <h1>ABOUT ME</h1>

                <div className='container-perfil'>
                    <figure>
                        <img className='img-perfil' src={Cris} alt="perfil" />
                    </figure>
                    <div className='perfil_dados'>
                        <h3>MY NAME</h3>
                        <p>Crislayne Ramos</p>
                        <h3>EMAIL</h3>
                        <p>crissoares346@gmail.com</p>
                        <h3>SOCIAL</h3>
                        <nav className='saciais'>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/crislayne-ramos-9650b51a2/" target='_blank' rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a></li>
                                <li><a href="https://github.com/CrislayneSoares" target='_blank' rel="noreferrer"><img src={github} alt="GitHub" /></a></li>
                                <li><a href="https://www.instagram.com/crissoaresr/" target='_blank' rel="noreferrer"><img src={insta} alt="Instagram" /></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <p className='description'>Olá, me chamo Crislayne Ramos, tenho 25 anos e atualmente estou estudando desenvolvimento web Front-end na VNW - Vai Na Web. Estou familiarizada com as tecnologias Git, GitHub, HTML5, CSS3 e Javascript. Estou estudando o frameworks Angular e a lib do React. Tenho conhecimentos básicos em Python, C++, Arduino, Java, MySQL, CorelDraw e Figma. Sou uma pessoa organizada e curiosa, sempre disposta a aprender!</p>
                
                <h2>My Habilities</h2>
                <section className='container__hab'>
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
                    <div className='box-habilidade'>
                        <figure>
                            <img src={GIT} alt="tech" />
                            <figcaption>Git</figcaption>
                        </figure>
                    </div>
                    <div className='box-habilidade'>
                        <figure>
                            <img src={FIGMA} alt="tech" />
                            <figcaption>Figma</figcaption>
                        </figure>
                    </div>
                </section>

                <h2>Studies</h2>
                <section className='container__estudos'>
                    <div className='box-estudos'>
                        <figure>
                            <img src={vnw} alt="Vai na web" />
                            <figcaption>Desenvolvimento front-end</figcaption>
                            <p>ABR/2023 - DEZ/2023</p>
                        </figure>
                    </div>
                    <div className='box-estudos'>
                        <figure>
                            <img src={ceep} alt="CEEP" />
                            <figcaption>Técnico em informática</figcaption>
                            <p>SET/2021 - JUL/2023</p>
                        </figure>
                    </div>
                    <div className='box-estudos'>
                        <figure>
                            <img src={dio} alt="Dio" />
                            <figcaption>Git e GitHub</figcaption>
                            <p>AGO/2023</p>
                        </figure>
                    </div>
                    <div className='box-estudos'>
                        <figure>
                            <img src={dio} alt="Dio" />
                            <figcaption>Angular</figcaption>
                            <p>AGO/2023 - SET/2023</p>
                        </figure>
                    </div>
                </section>
            </div>
        </section>
    )
}