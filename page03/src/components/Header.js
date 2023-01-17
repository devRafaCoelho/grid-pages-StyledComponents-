import styled from "styled-components";

export const Header = styled.header`
    padding: 30px;
    grid-column: span 3;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderHeaderColor};
`;
