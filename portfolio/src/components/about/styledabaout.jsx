import styled from "styled-components";

export const Main = styled.main`
height: 90vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-top: 10vh;
align-items: center;
gap: 5vh;
p {
    text-align: center;
    width: 60vw;
}
h2 {
   color: hsl(255, 0%, 65%);
}
`
// Barra de nivel de Habilidade
export const Barra = styled.div`
    background-color: #cecece;
    border-radius: 5px;
    height: 2vh;
    width: 20vw;
`
export const Habilidades = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: end;
`
export const DivSkill = styled.figure`
display: flex;
align-items: center;
gap: 25px;
`
export const Skill = styled.img`
height: 7vh;
`
// Skill 1 
export const Nivel1 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 90%;
`
// Skill 2
export const Nivel2 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 60%;
`
// Skill 3
export const Nivel3 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 50%;
`
// Skill 4
export const Nivel4 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 75%;
` 
// Skill 5
export const Nivel5 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 60%;
`
// Skill 6
export const Nivel6 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 70%;
`
// Skill 7
export const Nivel7 = styled.div`
background-color:  hsl(255, 100%, 50%);
border-radius: 5px 0px 0px 5px;
height: 2vh;
width: 30%;
`