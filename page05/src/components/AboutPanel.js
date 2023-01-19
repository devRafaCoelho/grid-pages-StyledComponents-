import styled from "styled-components";

export const AboutPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;
    overflow: hidden;

    img {
        min-width: 100%;
        min-height: 100%;
    }

    div {
        padding: 30px 60px;
        color: ${({ theme }) => theme.colors.darkGray};
        background-color: ${({ theme }) => theme.colors.lightGray};
    }

    @media screen and (max-width: 960px) {
        grid-row: 2;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 680px) {
        grid-column: span 1;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
`;
