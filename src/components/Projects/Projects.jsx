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
                <Card image={Pokedex} alt={"Pokedex"} title={"Pokedex"} des={"Projeto construído com HTML, CSS e JavaScript."} link={"https://pokedex-xi-flax.vercel.app"}/>
                <Card image={Calculadora} alt={"Calculadora"} title={"Calculadora"} des={"Construída em React, style com Sass. Duas versões de calculadora."} link={"https://react-calculadora-lime.vercel.app"}/>
                <Card image={La_pizza} alt={"La Pizza"} title={"La Pizza"} des={"Página de uma pizzaria feita com React, Styled Components"} link={"https://la-pizza-react-gfuf.vercel.app"}/>
                <Card image={Loja_produtos} alt={"Loja de produtos naturais"} title={"Loja de produtos Naturais"} des={"Feita com HTML5, CSS3. Uma página simples de uma Home."} link={"https://ecommerce-one-sandy.vercel.app"}/>
                <Card image={Fantastika} alt={"Fantastica PetShop"} title={"Fantastika PetShop"} des={"Site construído com HTML5 e CSS3. Site responsivo que se adapta a diferentes tamanhos de tela."} link={"https://aulas-vnw.vercel.app"}/>
                <Card image={NFT} alt={"NFT"} title={"NFT"} des={"Card NFT de uma criptomoeda feito com HTML5 e CSS. Um desafio proposto por FrontEnd Mentor."} link={"https://frontend-mentor-1m9s.vercel.app"}/>
            </section>
        </section>
    )
}