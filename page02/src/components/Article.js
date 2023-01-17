import styled from "styled-components";

export const Article = styled.article`
    img {
        width: 100%;
        border-radius: 8px;
        border: 4px solid ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: 980px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column: span 3;
        gap: 60px;

        align-items: center;
    }

    @media screen and (max-width: 760px) {
        display: block;
        margin: 0 20px;
    }
`;
