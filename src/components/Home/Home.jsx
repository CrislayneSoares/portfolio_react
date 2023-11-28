import './Home.sass'

export default function Home(){
    return(
        <section className='container__home'>
            <div className='fundo'>
                <div className='title'>
                    <h1>Crislayne Ramos</h1>
                    <p>Desenvolvedora Front-End</p>
                </div>
                <div className='nuvens-brancas'></div>
                <div className='zeppelin'></div>
                <button>
                    <a href="\src\assets\CRISLAYNE_SOARES_RAMOS.pdf" download={true}>Baixar CV</a>
                </button>
            </div>
        </section>
    )
}