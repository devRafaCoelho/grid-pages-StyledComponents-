import styled from "styled-components";

export const Main = styled.main`
    max-width: 1200px;
    margin: 60px auto;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;

    img {
        grid-column: span 6;
        width: 100%;
        border-radius: 6px;
    }

    h2 {
        grid-column: span 12;
        text-align: center;
        font-size: 1.5em;
        padding-top: 20px;
    }

    @media screen and (max-width: 960px) {
        img {
            grid-column: 2 / span 10;
        }
    }
`;
