import react from 'react';
import { TSettings, TWarrior } from '../Wrapper';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { TextInput } from '../inputs/TextInput';
import { NumberInput } from '../inputs/NumberInput';
import { ColorInput } from '../inputs/ColorInput';
type TWarriorFormProps = {
    register: UseFormRegister<TSettings>;
    remove: (index: number) => void;
    index: number;
    field: TWarrior
};

export const WarriorForm = ({ index, register, remove, field }: TWarriorFormProps) => {
    console.log(field)
    return <tr>
        <td>
            <TextInput
                name={`warriors.${index}.name`}
                register={register}
                required={true}
                defaultValue={field.name}
            />
        </td>
        <td>
            <NumberInput
                name={`warriors.${index}.pointsPerSprint`}
                register={register}
                defaultValue={field.pointsPerSprint}
            />
        </td>
        <td>
            <ColorInput name={`warriors.${index}.color`} register={register} defaultValue={field.color} />
        </td>
        <td>
            <button onClick={() => remove(index)}>Delete</button>
        </td>
    </tr>
}