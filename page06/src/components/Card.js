import styled from "styled-components";

export const Card = styled.div`
    padding: 10px 20px;
    display: grid;
    grid-column: span 4;
    gap: 15px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.shadow};

    @media screen and (max-width: 960px) {
        grid-column: 3 / span 8;
    }
`;
