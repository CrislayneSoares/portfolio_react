import './Projects.sass'
import Calculadora from '../../assets/imgs/projetos/calculadora.png'
import Pokedex from '../../assets/imgs/projetos/pokedex.png'

import La_pizza from '../../assets/imgs/projetos/la-pizza.png'
import Loja_produtos from '../../assets/imgs/projetos/loja-produtos.png'

import Fantastika from '../../assets/imgs/projetos/fantastika.png'
import NFT from '../../assets/imgs/projetos/nft.png'
import Card from './Card/Card'

export default function Projects(){
    return(
        <section className='container__projects'>
            <h2>PROJECTS</h2>
            <section className='projects'>
                <Card image={Pokedex} alt={"Pokedex"} des={"Pokedex construída com HTML, CSS e JavaScript."} link={"https://pokedex-xi-flax.vercel.app"}/>
                <Card image={Calculadora} alt={"Calculadora"} des={"Calculadora construída em React"} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={La_pizza} alt={"La Pizza"} des={"Página de uma pizzaria chamada La Pizza"} link={"https://la-pizza-react-gfuf.vercel.app"}/>
                <Card image={Loja_produtos} alt={"Loja de produtos naturais"} des={"Loja de produtos naturais"} link={"https://ecommerce-one-sandy.vercel.app"}/>
                <Card image={Fantastika} alt={"Fantastica PetShop"} des={"Site Fantastika PetShop"} link={"https://aulas-vnw.vercel.app"}/>
                <Card image={NFT} alt={"NFT"} des={"NFT"} link={"https://frontend-mentor-1m9s.vercel.app"}/>
            </section>
        </section>
    )
}