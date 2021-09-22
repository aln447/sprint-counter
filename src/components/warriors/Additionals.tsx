import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "../inputs/interfaces";
import { NumberInput } from "../inputs/NumberInput";
import { TAdditionalWarriorSetting } from "../Wrapper";

interface AdditionalsProps {
    index: number;
    field?: TAdditionalWarriorSetting;
}

export const Additionals = ({ index, field }: AdditionalsProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleToggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setShowForm(!showForm);
    }

    return <>
        <button onClick={handleToggleForm} title="Add/subtract additional points">+</button>
    </>
}