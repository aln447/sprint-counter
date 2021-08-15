import React from 'react';
import { FieldArrayWithId, UseFormRegister } from 'react-hook-form';
import { WarriorForm } from './WarriorForm';
import { TSettings, TWarrior } from '../Wrapper';


type WarriorsProps = {
    fields: FieldArrayWithId[];
    register: UseFormRegister<TSettings>;
    remove: (index: number) => void;
    append: (warrior: TWarrior) => void;
};

const emptyWarrior: TWarrior = {
    name: '',
    slug: '',
    pointsPerSprint: 0,
    color: '',
}

export const Warriors = ({ fields, register, remove, append }: WarriorsProps) => {
    return (<div className="warriors">
        {fields.length === 0 && <p>No warriors yet. Add a few :)</p>}
        {fields.map((field, index) => <WarriorForm
            key={field.id}
            index={index}
            register={register}
            remove={remove}
        />)}
        <button onClick={() => append(emptyWarrior)}>Add Warrior</button>
    </div>)
}