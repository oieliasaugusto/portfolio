import React from "react";

import * as S from "./styledabaout";

// imagens... QUERO TRAZER NA PROXIMA ENTREGA
// import Photoshop from "../../assets/photoshop.png"
// import After from "../../assets/after.png"
// import Figma from "../../assets/figma.png"
// import Kanban from "../../assets/kanban.png"
// import DThinking from "../../assets/dthinking.png"
// import Motion from "../../assets/motion.png"

function About() {
    return (
    <>
    <S.Main>
        <h2>Sobre mim</h2>
        <p>Sou um designer multidisciplinar, experiente em Branding.</p>
        <h2>Habilidades</h2>
        <S.Habilidades>
           <S.DivSkill>
           {/* <S.Skill src={Photoshop} alt="photoshop" /> */}
           <h3>Motion e Vídeo</h3>
                <S.Barra>
                <S.Nivel1></S.Nivel1>
                </S.Barra>
            </S.DivSkill>

            <S.DivSkill>
           <h3>UI e UX</h3>
                <S.Barra>
                <S.Nivel2></S.Nivel2>
                </S.Barra>
            </S.DivSkill>
            
            <S.DivSkill>
           <h3>Design Thinking</h3>
                <S.Barra>
                <S.Nivel3></S.Nivel3>
                </S.Barra>
            </S.DivSkill>
                        
            <S.DivSkill>
           <h3>Agile e Kanban</h3>
                <S.Barra>
                <S.Nivel4></S.Nivel4>
                </S.Barra>
            </S.DivSkill>
                        
            <S.DivSkill>
           <h3>Identidade visual</h3>
                <S.Barra>
                <S.Nivel5></S.Nivel5>
                </S.Barra>
            </S.DivSkill>
                        
            <S.DivSkill>
           <h3>Photoshop</h3>
                <S.Barra>
                <S.Nivel6></S.Nivel6>
                </S.Barra>
            </S.DivSkill>
                                    
            <S.DivSkill>
           <h3>HTML & CSS</h3>
                <S.Barra>
                <S.Nivel7></S.Nivel7>
                </S.Barra>
            </S.DivSkill>

        </S.Habilidades>
    </S.Main>
    </>
    );
}

export default About;
