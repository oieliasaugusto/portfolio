// Criei esse arquivo como um LEMBRETE de como estilizar um componente
import React from 'react';
import * as S from './styledtutorial';

function Tutorial() {
    return (
        <S.NomeiaClasse>Sucesso</S.NomeiaClasse>
// Aqui entra todo o código HTML com as classes,

// Agora, ao invés de "<div class=...>" use "<S.Botao></S.Botao>"
// então crie um arquivo "styled.botao"

// EXEMPLO "styled.botao" >>>>>>>>>
// import styled from "styled-components";
//
// export const Botao = styled.button`
// border-radius: 10px;
// `
    );
}

export default Tutorial;