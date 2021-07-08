import react from 'react';
import { TSettings, TWarrior } from './Wrapper';
import { useFieldArray, useForm } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';
import { WarriorForm } from './WarriorForm';

type SettingsProps = {
    settings: TSettings,
    setSettings: (settings: TSettings) => void;
}

const emptyWarrior: TWarrior = {
    name: '',
    slug: '',
    pointsPerSprint: 0,
    color: '',
}

const defaultSprintSettings: TSettings = {
    sprint: {
        name: '',
        length: 0,
    },
    warriors: [],
}

export const Settings = (props: SettingsProps) => {
    const { settings, setSettings } = props;
    const { handleSubmit, register, control } = useForm({ defaultValues: defaultSprintSettings });
    const { fields, append } = useFieldArray({
        control,
        name: 'warriors'
    })
    const onSubmit = (newSettings: any) => {
        console.log(newSettings);
    }

    return <div>
        <header>Settings</header>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="sprint.name">
                Sprint Name
                <TextInput name='sprint.name' register={register} />
            </label>
            <label htmlFor="sprint.length">
                Length (days)
                <NumberInput name='sprint.length' register={register} />
            </label>
            {fields.map((field, index) => <WarriorForm key={field.id} index={index} register={register} />)}
            <button onClick={() => append(emptyWarrior)}>Add Warrior</button>
            <button type="submit">Save</button>
        </form>
    </div>
}