import React from "react";
import Menu from "./components/menu/menu";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Menu/>
    </>
  );
}

export default App;