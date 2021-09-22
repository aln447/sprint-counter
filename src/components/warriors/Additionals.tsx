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
}

const AdditionalsPopup = styled.span``;

export const Additionals = ({ warriorIndex, index, field, register }: AdditionalsProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleToggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setShowForm(!showForm);
    }

    return <td>
        {showForm && <AdditionalsPopup>
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
        </AdditionalsPopup>}
        <button onClick={handleToggleForm} title="Add/subtract additional points">
            {field?.points ?? '+'}
        </button>
    </td>
}