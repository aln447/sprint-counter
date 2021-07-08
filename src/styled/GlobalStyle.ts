import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        --bg: #80808029;
        --text: #000000d9;

        font-family: monospace;
        width: 100%;
        height: 100%;
        background: var(--bg);
        color: var(--text);
    }
`;