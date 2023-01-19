import styled from "styled-components";

export const PhotosPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
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

    @media screen and (max-width: 1400px) {
        grid-column: span 2;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    @media screen and (max-width: 960px) {
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
        grid-column: span 1;
        grid-template-rows: 1fr 1fr;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
`;
