import styled from "styled-components";

export const Main = styled.main`
height: 90vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-top: 10vh;
align-items: center;
gap: 2vh;
h1 {
    font-size: 2em;
    font-weight: 700;
    background-color: hsl(255, 100%, 50%);
    color: white;
    height: 8vh;
    display: flex;
    align-items: center;
    text-align: center;
}
h2 {
    font-size: 2em;
    font-weight: 700;
    color: hsl(255, 100%, 50%);
}
p {
text-align: center;
}
`
export const Verso = styled.section`
height: 30vh;
gap: 2vh;
display: flex;
flex-direction: column;
justify-content: center;
`
