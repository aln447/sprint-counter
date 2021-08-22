import react from 'react';
import { TSettings, TWarrior } from './Wrapper';
import { useFieldArray, useForm } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';
import { WarriorForm } from './warriors/WarriorForm';
import { ErrorMessage } from './utils/ErrorMessage';
import { StyledSettings } from '../styled/StyledSettings';
import { Warriors } from './warriors/Warriors';

type SettingsProps = {
    settings: TSettings,
    setSettings: (settings: TSettings) => void;
    setShowSettings: (show: boolean) => void;
}

const defaultSprintSettings: TSettings = {
    sprint: {
        name: '',
        length: 0,
    },
    warriors: [],
}


export const Settings = (props: SettingsProps) => {
    const { settings, setSettings, setShowSettings } = props;
    const { handleSubmit, register, control, formState: { errors } } = useForm({ defaultValues: defaultSprintSettings });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'warriors'
    })
    const onSubmit = (newSettings: TSettings) => {
        newSettings.sprint.length = parseInt(newSettings.sprint.length as unknown as string, 10);
        setSettings(newSettings);
        setShowSettings(false);
    }

    return <StyledSettings>
        <h2>Settings</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                labelName="Sprint Name"
                name="sprint.name"
                required={true}
                errorField={errors.sprint?.name}
                register={register}
            />
            <label htmlFor="sprint.length">
                Length (days)
                <NumberInput name='sprint.length' register={register} />
            </label>
            <Warriors
                register={register}
                fields={fields}
                remove={remove}
                append={append}
            />
            <button type="submit">Save</button>
        </form>
    </StyledSettings>
}