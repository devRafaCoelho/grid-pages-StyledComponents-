import styled from "styled-components";

export const Header = styled.header`
    padding: 20px 40px;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    gap: 30px;

    background-color: ${({ theme }) => theme.colors.white};

    h1 {
        grid-column: span 6;
    }

    nav {
        grid-column: span 6;
        justify-self: end;

        a {
            margin-left: 10px;
            color: ${({ theme }) => theme.colors.links};
        }
    }
`;
