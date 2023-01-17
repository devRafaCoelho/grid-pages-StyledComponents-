import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    } 

    body {
        margin: 30px;
        font-family: 'Poppins', sans-serif; 
    }

    /* #root {
        width: 100%;
        min-height: 100vh;        
    } */
`;
