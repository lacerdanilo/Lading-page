import { createGlobalStyle } from "styled-components";
import Bg1 from "../assets/ellipse1-bg.png"
import Bg2 from "../assets/ellipse2-bg.png"

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: 0;
}
html, body, #root {
    height: 100vh;
}

body {
    background: url(${Bg2}) no-repeat 1010px, url(${Bg1}) no-repeat 931px;
    background-size: cover;
    background-color: #F8FDFF;
    font-family: "Poppins", sans-serif;
}

button {
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    border: none;
    outline: none;
}

a{
    text-decoration: none;
    outline: none;
}

`