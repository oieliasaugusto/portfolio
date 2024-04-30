import React from "react";
import Home from "../home/home";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

import * as S from "./styledmenu";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Menu() {
    return (
        <>
        <BrowserRouter>
            <S.Header>
                <S.Perfil>
                    <h2>Elias Augusto</h2>
                    <h3>Designer Digital</h3>
                </S.Perfil>
                <S.Navega>
                    <S.Li> <Link to="../">Início</Link>  </S.Li>
                    <S.Li> <Link to="/About">Sobre mim</Link>   </S.Li>
                    <S.Li> <Link to="/Projects">Projetos</Link>  </S.Li>
                    <S.Li> <Link to="/Contact">Contato</Link>  </S.Li>
                </S.Navega>
            </S.Header>
            {/* Fim do Conteudo e Inicio das Rotas */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="About" element={<About/>} />
                <Route path="Projects" element={<Projects/>} />
                <Route path="Contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Menu;