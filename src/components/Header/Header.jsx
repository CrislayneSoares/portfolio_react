import { useEffect, useState } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import './Header.sass'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Coracao_cheio from '../../assets/imgs/icons/coracao-branco.png'
import Coracao_vazio from '../../assets/imgs/icons/coracao.png'
import Menu from '../../assets/imgs/icons/cardapio.png'
import Home from '../Home/Home'

export default function Header(){
    const [select1, setSelect1] = useState(Coracao_cheio)
    const [select2, setSelect2] = useState(Coracao_vazio)
    const [select3, setSelect3] = useState(Coracao_vazio)
    const [select4, setSelect4] = useState(Coracao_vazio)
    const [visible, setVisible] = useState('none')

    const mudarSelect = (num) => {
        switch (num) {
            case 1:
                setSelect1(Coracao_cheio)
                setSelect2(Coracao_vazio)
                setSelect3(Coracao_vazio)
                setSelect4(Coracao_vazio)
                break;
            case 2:
                setSelect1(Coracao_vazio)
                setSelect2(Coracao_cheio)
                setSelect3(Coracao_vazio)
                setSelect4(Coracao_vazio)
                break;
            case 3:
                setSelect1(Coracao_vazio)
                setSelect2(Coracao_vazio)
                setSelect3(Coracao_cheio)
                setSelect4(Coracao_vazio)
                break;
            case 4:
                setSelect1(Coracao_vazio)
                setSelect2(Coracao_vazio)
                setSelect3(Coracao_vazio)
                setSelect4(Coracao_cheio)
                break;
            default:
                break;
        }
    }

    const menu = (disp) => {
        if (visible === disp) {
            setVisible("block")
        } else {
            setVisible("none")
        }
    }

    useEffect(()=>{
        mudarSelect()
        menu()
    },[])

    return (
        <BrowserRouter>
            <header className='container__header'>
                
                <nav style={{display: visible}}>
                    <ul>
                        <li onClick={()=>{mudarSelect(1)}}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li onClick={()=>{mudarSelect(2)}}>
                            <Link to={'/about'}>About me</Link>
                        </li>
                        <li onClick={()=>{mudarSelect(3)}}>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        <li onClick={()=>{mudarSelect(4)}}>
                            <Link to={'/projects'}>Projects</Link>
                        </li>
                    </ul>
                </nav>
                <figure onClick={()=>{menu("none")}}>
                    <img src={Menu} alt="Menu Hamburguer" />
                </figure>
                
            </header>

            <nav className='container__nav'>
                <ul>
                    <li onClick={()=>{mudarSelect(1)}}>
                        <Link to={'/'}><img src={select1} alt="coração" /></Link>
                    </li>
                    <li onClick={()=>{mudarSelect(2)}}>
                        <Link to={'/about'}><img src={select2} alt="coração" /></Link>
                    </li>
                    <li onClick={()=>{mudarSelect(3)}}>
                        <Link to={'/contact'}><img src={select3} alt="coração" /></Link>
                    </li>
                    <li onClick={()=>{mudarSelect(4)}}>
                        <Link to={'/projects'}><img src={select4} alt="coração" /></Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}