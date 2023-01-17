import styled from "styled-components";

export const Aside = styled.aside`
    padding: 30px;
    border-left: 1px solid ${({ theme }) => theme.colors.borderHeaderColor};

    li {
        margin-bottom: 15px;

        p {
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 1200px) {
        padding: 16px;
    }

    @media screen and (max-width: 980px) {
        grid-column: span 3;
        border-left: 0;
        border-top: 1px solid ${({ theme }) => theme.colors.borderHeaderColor};
    }
`;
