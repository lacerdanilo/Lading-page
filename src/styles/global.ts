import { createGlobalStyle } from "styled-components";

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