import styled from "styled-components";

export const BigCard = styled.div`
    display: grid;
    grid-row: span 2;
    overflow: hidden;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 16px solid ${({ theme }) => theme.colors.white};
    box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.boxShadowColor};

    img {
        min-width: 100%;
        height: 100%;
    }
`;
