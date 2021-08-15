import react from 'react';
import { TSettings } from '../Wrapper';
import { useForm, UseFormRegister } from 'react-hook-form';
import { TextInput } from '../inputs/TextInput';
import { NumberInput } from '../inputs/NumberInput';
import { ColorInput } from '../inputs/ColorInput';

type TWarriorFormProps = {
    register: UseFormRegister<TSettings>;
    remove: (index: number) => void;
    index: number;
};

export const WarriorForm = ({ index, register, remove }: TWarriorFormProps) => {
    return <div>
        <TextInput
            name={`warriors.${index}.name`}
            register={register}
            required={true}
            labelName="Name"
        />
        <TextInput
            name={`warriors.${index}.pointsPerSprint`}
            register={register}
            required={true}
            labelName="Points per sprint"
        />
        <label htmlFor={`warriors.${index}.color`}>
            <ColorInput name={`warriors.${index}.color`} register={register} />
        </label>
        <button onClick={() => remove(index)}>Delete</button>
    </div>
}