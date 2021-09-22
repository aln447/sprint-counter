import { TSettings, TWarrior } from '../Wrapper';
import { Control, useFieldArray, useFormContext, UseFormRegister } from 'react-hook-form';
import { TextInput } from '../inputs/TextInput';
import { NumberInput } from '../inputs/NumberInput';
import { ColorInput } from '../inputs/ColorInput';
import { Additionals } from './Additionals';
interface TWarriorFormProps {
    register: UseFormRegister<TSettings>;
    remove: (index: number) => void;
    index: number;
    field: TWarrior
    control: Control<TSettings>;
};

export const WarriorForm = ({ index, register, remove, field, control }: TWarriorFormProps) => {
    const { fields } = useFieldArray({ control, name: `warriors.${index}.additionals` });

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
        {fields.map((additionalsField, i) => <Additionals field={additionalsField} index={i} key={i} warriorIndex={index} register={register} />)}
        <Additionals index={fields.length} warriorIndex={index} register={register} />
        <td>
            <button onClick={() => remove(index)}>Delete</button>
        </td>
    </tr>
}