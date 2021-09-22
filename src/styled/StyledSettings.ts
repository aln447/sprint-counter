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

        .error-msg {
            color: var(--orng1);
        }
    }

    input {
            margin-left: 10px;
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

    .warriors {
        button {
            height: 20px;
        }
    }

    button {
        background: none;
        border: 1px solid white;
        color: white;
        border-radius: 2px;
        height: 26px;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
            background: rgba(255,255,255,.1);
        }

        &[type=submit] {
            margin-top: 20px;
            font-weight: bold;
            height: 30px;
        }
    }
`;