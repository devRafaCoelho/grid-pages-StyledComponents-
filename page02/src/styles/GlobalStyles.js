import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        /* width: 100%;
        min-height: 100vh; */
        margin: 20px;
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
    }

    h1, h2, h3 {
        color: ${({ theme }) => theme.colors.titlesColor};
    }

    p {
        color: ${({ theme }) => theme.colors.paragraphColor} ;
    }
`;
