import styled from "styled-components";

export const SmallCard = styled.div`
    display: grid;
    grid-row: span 1;
    overflow: hidden;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 16px solid ${({ theme }) => theme.colors.white};
    box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.boxShadowColor};
`;
