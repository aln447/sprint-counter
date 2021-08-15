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
    return <tr>
        <td>
            <TextInput
                name={`warriors.${index}.name`}
                register={register}
                required={true}
            />
        </td>
        <td>
            <TextInput
                name={`warriors.${index}.pointsPerSprint`}
                register={register}
                required={true}
            />
        </td>
        <td>
            <ColorInput name={`warriors.${index}.color`} register={register} />
        </td>
        <td>
            <button onClick={() => remove(index)}>Delete</button>
        </td>
    </tr>
}