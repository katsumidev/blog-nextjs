import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Quicksand', sans-serif;
    }

    body {
        background-color: #fff;
    }

    :root {
        --accent-color: #fff;
        --white: #fff;
        --gray: #a6a6a6;
        --background-gray: #eee;
        --code-block: #282A36;
    } 
`;
