import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        --text: white;
        --dkbl1: #314357;
        --dkbl2: #456672;
        --orng1: #e3b587;
        --orng2: #c98c70;


        font-family: monospace;
        width: 100%;
        height: 100%;
        background-color: var(--dkbl1);
        color: var(--text);
    }
`;