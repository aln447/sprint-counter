import react from 'react';
import { TSettings } from './Wrapper';
import { useForm } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';

type SettingsProps = {
    settings: TSettings,
    setSettings: (settings: TSettings) => void;
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
    const { handleSubmit, register } = useForm({ defaultValues: defaultSprintSettings });

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


            <button type="submit">Save</button>
        </form>
    </div>
}