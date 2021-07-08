import react from 'react';
import { TSettings } from './Wrapper';
import { useForm, UseFormRegister } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';

type TWarriorFormProps = {
    register: UseFormRegister<TSettings>;
    remove: (index: number) => void;
    index: number;
};

export const WarriorForm = ({ index, register, remove }: TWarriorFormProps) => {
    return <div>
        <label htmlFor={`warriors.${index}.name`}>
            <TextInput name={`warriors.${index}.name`} register={register} />
        </label>
        <label htmlFor={`warriors.${index}.pointsPerSprint`}>
            <TextInput name={`warriors.${index}.pointsPerSprint`} register={register} />
        </label>
        <label htmlFor={`warriors.${index}.color`}>
            <TextInput name={`warriors.${index}.color`} register={register} />
        </label>
        <button onClick={() => remove(index)}>Delete</button>
    </div>
}