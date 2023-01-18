import styled from "styled-components";

export const Header = styled.header`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.white};

    nav {
        margin: 0 auto;
        max-width: 1400px;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        text-align: center;

        a {
            color: ${({ theme }) => theme.colors.linkColor};
        }

        h1 {
            text-transform: uppercase;
            line-height: 1em;

            div:first-child {
                font-weight: 800;
                letter-spacing: 1.5px;
            }

            div:last-child {
                font-weight: 400;
            }
        }

        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(4, 1fr);

            h1 {
                grid-column: 1 / span 4;
                grid-row: 1;
                margin-bottom: 15px;
            }
        }
    }
`;
