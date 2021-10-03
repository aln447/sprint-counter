import React, { ReactFragment, useState } from "react";
import { useFormContext, UseFormRegister, useWatch } from "react-hook-form";
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
    append: (value: Partial<TAdditionalWarriorSetting>) => void;
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

export const Additionals = ({ warriorIndex, index, field, register, append, removeAdditional, defaultOpen = false }: AdditionalsProps) => {
    const [showForm, setShowForm] = useState<boolean>(!field?.points);

    const { control } = useFormContext();
    const watchedPoints = useWatch({
        name: `warriors.${warriorIndex}.additionals.${index}.points`,
        control,
        defaultValue: field?.points,
    });

    const handleToggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setShowForm(!showForm);
    }

    const handleAddNew = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // since the inputs are already registered we only want to close the form and append a new empty field;
        if (watchedPoints) {
            setShowForm(false);
        }
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        removeAdditional(index);
        setShowForm(false);
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
            <button onClick={handleAddNew}>Save</button>
            <button onClick={handleDelete}>Delete</button>
        </span>}
        <button onClick={handleToggleForm}>
            {watchedPoints}
        </button>
    </StyledAdditionals>
}