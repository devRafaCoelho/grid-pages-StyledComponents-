import styled from "styled-components";

export const Footer = styled.footer`
    padding: 30px;
    grid-column: span 3;
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.borderHeaderColor};
`;
