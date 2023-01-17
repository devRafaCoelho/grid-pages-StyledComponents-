import styled from "styled-components";

export const Header = styled.header`
    max-width: 1200px;
    margin: 40px auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;
