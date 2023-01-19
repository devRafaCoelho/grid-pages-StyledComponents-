import styled from "styled-components";

export const WelcomeContent = styled.div`
    grid-column: 8 / span 5;

    h3 {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 960px) {
        grid-column: 3 / span 8;
        text-align: center;
    }
`;
