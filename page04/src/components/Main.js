import styled from "styled-components";

export const Main = styled.main`
    max-width: 1200px;
    margin: 60px auto;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    gap: 30px;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        max-width: 400px;
        margin: 20px auto;
        grid-template-columns: 1fr;
    }
`;
