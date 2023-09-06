import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --red-color: #E51D37;
    }

    *{
        margin: 0;
        padding: 0;
    }

    body{
        color: #333333;
        font-family: 'Sora', sans-serif;
         
    }

    h1, h2, h3, h4{
        margin: 0;
        padding: 0;
        
    }
    p{
        padding: 0;
        margin: 0;
    }

`