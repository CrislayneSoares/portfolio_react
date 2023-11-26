import './Home.sass'
import CV from '../../assets/CRISLAYNE_SOARES_RAMOS.pdf'

export default function Home(){
    return(
        <section className='container__home'>
            <div className='fundo'>
                <div>
                    <h1>Crislayne Ramos</h1>
                    <p>Desenvolvedora Front-End</p>
                </div>
                <div className='nuvens-brancas'></div>
                <div className='zeppelin'></div>
                <button>
                    <a href="../../assets/CRISLAYNE_SOARES_RAMOS.pdf" download={CV}>Baixar CV</a>
                </button>
            </div>
        </section>
    )
}