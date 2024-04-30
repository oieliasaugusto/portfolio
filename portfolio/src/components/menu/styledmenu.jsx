import styled from "styled-components";

export const Perfil = styled.figure`
display: flex;
flex-direction: column;
gap: 2px;
justify-content: center;
height: 10vh;
text-align: center;
h2 {
    color: hsl(0, 0%, 100%);
    font-size: 1.3em;
}
h3 {
    font-size: 1em;
    font-weight: 500;
    color: hsl(220, 50%, 80%);
}
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
/* background-color: #1a0066; */
background-image: linear-gradient(to right, hsl(255.2941176470588, 100%, 20%), hsl(255.2941176470588, 100%, 30%));
color: white;
padding: 0vw 10vh 0vw 10vh;
`

// Navegação
export const Navega = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
height: 5vh;
width: 60vw;
@media (max-width: 800px) {
 display: none;    
}
`
export const Li = styled.li`
list-style: none;
a {
    text-decoration: none;
    color: white;
}
a:hover {
    color: hsl(190, 95%, 50%);
}
`