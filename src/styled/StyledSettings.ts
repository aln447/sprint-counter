import styled from 'styled-components';

export const StyledSettings = styled.div`
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    background-color: var(--dkbl2);

    label {
        width: 100%;
        display: block;
        margin: 5px 0;

        input {
            margin-left: 20px;
            height: 20px;
            background-color: transparent;
            border: 2px solid var(--wht);
            color: var(--wht);
            border-radius: 5px;

            &:active,
            &:focus {
                background: var(--dkbl1);
                outline: none;
            }
        }
    }

    .warriors {
        label, 
        button {
            display: inline-block;
            width: auto;
            margin-left: 5px;
        }

        label input:first-of-type {
            margin-left: 0px;
        }

        button {
            height: 20px;
        }
    }

    button {
        background: white;
        border: none;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        cursor: pointer;

        &[type=submit] {
            margin-top: 20px;
            font-weight: bold;
            padding: 15px;
        }
    }
`;