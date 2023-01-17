import styled from "styled-components";

export const Nav = styled.nav`
    padding: 30px;
    border-right: 1px solid ${({ theme }) => theme.colors.borderHeaderColor};

    p {
        margin-bottom: 15px;
    }

    li {
        text-decoration: underline;
    }

    @media screen and (max-width: 1200px) {
        grid-column: span 3;
        border-right: 0;
        border-bottom: 1px solid
            ${({ theme }) => theme.colors.borderHeaderColor};

        li {
            display: inline-block;
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 980px) {
        grid-column: span 3;
    }
`;
