import styled from "styled-components";

export const Article = styled.article`
    padding: 30px;

    h2 {
        max-width: 800px;
        margin-bottom: 30px;
        font-size: 3.5em;
    }

    img {
        width: 100%;
    }

    p {
        margin-top: 30px;
        line-height: 2em;
        color: ${({ theme }) => theme.colors.paragraphColor};
    }

    @media screen and (max-width: 1200px) {
        grid-column: span 2;
    }

    @media screen and (max-width: 980px) {
        grid-column: span 3;

        h2 {
            font-size: 2.5em;
        }
    }
`;
