import styled from "styled-components";

export const FirstArticle = styled.article`
    padding-bottom: 40px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: span 3;
    gap: 60px;

    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

    img {
        width: 100%;
        border-radius: 8px;
        border: 4px solid ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: 760px) {
        display: block;
        margin: 0 20px;
    }
`;
