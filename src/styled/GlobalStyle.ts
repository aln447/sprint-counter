import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        --text: white;
        --background: #314357;

        font-family: monospace;
        width: 100%;
        height: 100%;
        background-color: var(--background);
        color: var(--text);
    }
`;