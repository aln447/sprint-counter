import React, { useState } from "react";
import { useFormContext, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { InputProps } from "../inputs/interfaces";
import { NumberInput } from "../inputs/NumberInput";
import { TextInput } from "../inputs/TextInput";
import { TAdditionalWarriorSetting, TSettings } from "../Wrapper";

interface AdditionalsProps {
    warriorIndex: number;
    index: number;
    field?: TAdditionalWarriorSetting;
    register: UseFormRegister<TSettings>;
    defaultOpen?: boolean;
    removeAdditional: (index: number) => void;
}

const StyledAdditionals = styled.td`
    position: relative;

    span {
        position: absolute;
        bottom: 100%;
        left: 0;
        background: var(--dkbl1);
        padding: 5px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        text-align: right;

        input {
            margin-left: 0;
        }

        button {
            margin: 2px;
        }
    }
`;

export const Additionals = ({ warriorIndex, index, field, register, defaultOpen = false }: AdditionalsProps) => {
    const [showForm, setShowForm] = useState<boolean>(defaultOpen);

    const handleToggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setShowForm(!showForm);
    }

    return <StyledAdditionals>
        {showForm && <span>
            <NumberInput
                name={`warriors.${warriorIndex}.additionals.${index}.points`}
                defaultValue={field?.points}
                register={register}
            />
            <TextInput
                name={`warriors.${warriorIndex}.additionals.${index}.reason`}
                defaultValue={field?.reason}
                register={register}
                required={true}
            />
            <button>Save</button>
            <button>Delete</button>
        </span>}
        <button onClick={handleToggleForm}>
            {field?.points}
        </button>
    </StyledAdditionals>
}