import styled from "styled-components";

export const GridMain = styled.main`
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    min-height: 100%;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: 100%;
        grid-template-rows: 500px 400px 400px;
    }

    @media screen and (max-width: 680px) {
        grid-template-rows: 700px 600px 600px;
    }
`;
