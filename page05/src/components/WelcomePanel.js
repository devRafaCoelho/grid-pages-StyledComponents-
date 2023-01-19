import styled from "styled-components";

export const WelcomePanel = styled.div`
    padding: 30px 60px;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;

    background-color: ${({ theme }) => theme.colors.darkGray};

    a {
        margin-right: 20px;
        color: ${({ theme }) => theme.colors.mediumGray};
    }

    p {
        max-width: 540px;
        line-height: 2em;
        color: ${({ theme }) => theme.colors.mediumGray};
    }

    h1 {
        font-size: 3em;
        color: ${({ theme }) => theme.colors.lightGray};
    }

    footer {
        align-self: end;
    }

    @media screen and (max-width: 960px) {
        img {
            width: 100%;
        }
    }
`;
