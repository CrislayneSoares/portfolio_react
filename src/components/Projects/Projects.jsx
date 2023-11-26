import './Projects.sass'
import Calculadora from '../../assets/imgs/projetos/calculadora.png'
import Pokedex from '../../assets/imgs/projetos/pokedex.png'
import Blog from '../../assets/imgs/projetos/blog-travel.png'
import La_pizza from '../../assets/imgs/projetos/la-pizza.png'
import Loja_produtos from '../../assets/imgs/projetos/loja-produtos.png'
import The_wither from '../../assets/imgs/projetos/the-witcher.png'
import Fantastika from '../../assets/imgs/projetos/fantastika.png'
import Card from './Card/Card'

export default function Projects(){
    return(
        <section className='container__projects'>
            <h2>PROJECTS</h2>
            <section className='projects'>
                <Card image={Pokedex} alt={"Pokedex"} des={"Pokedex construída com HTML, CSS e JavaScript."} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={Calculadora} alt={"Calculadora"} des={"Calculadora construída em React"} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={Blog} alt={"Blog Travel"} des={"Blog de Viagem criado com Angular"} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={La_pizza} alt={"La Pizza"} des={"Página de uma pizzaria chamada La Pizza"} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={The_wither} alt={"The Witcher"} des={"Tela home do the witcher"} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={Loja_produtos} alt={"Loja de produtos naturais"} des={"Loja de produtos naturais"} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={Fantastika} alt={"Fantastica PetShop"} des={"Site Fantastika PetShop"} link={"https://react-calculadora-lime.vercel.app"}/>
            </section>
        </section>
    )
}