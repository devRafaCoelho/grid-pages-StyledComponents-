import styled from "styled-components";

export const Item = styled.div`
    padding: 20px;
    display: grid;
    align-items: center;
    text-align: center;
    border: 1px solid #777;
    background-color: #ccc;

    &:nth-child(1) {
        grid-column: 1 / span 2;
    }

    &:nth-child(2) {
        grid-column: span 3;
    }

    &:nth-child(3) {
        grid-column: span 1;
    }

    &:nth-child(4) {
        grid-column: 2 / 6;
    }

    &:nth-child(5) {
        grid-column: span 3;
    }
    &:nth-child(6) {
        grid-column: span 3;
    }
`;
