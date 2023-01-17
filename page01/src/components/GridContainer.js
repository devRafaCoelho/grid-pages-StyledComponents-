import styled from "styled-components";

export const GridContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 2fr 3fr;
    gap: 10px;

    background-color: #eee;
`;
