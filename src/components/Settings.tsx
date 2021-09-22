import { TSettings, TWarrior } from './Wrapper';
import { useFieldArray, useForm } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';
import { StyledSettings } from '../styled/StyledSettings';
import { Warriors } from './warriors/Warriors';

interface SettingsProps {
    settings: TSettings,
    setSettings: (settings: TSettings) => void;
    setShowSettings: (show: boolean) => void;
}

const setSlugsForWarriors = (warriors: TWarrior[]) => [...warriors].map((warrior) => {
    warrior.slug = warrior.name.replace(/\s+/g, '-').toLowerCase();

    return warrior;
})

export const Settings = (props: SettingsProps) => {
    const { settings, setSettings, setShowSettings } = props;
    const { handleSubmit, register, control, formState: { errors } } = useForm({ defaultValues: settings });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'warriors'
    })
    const onSubmit = (newSettings: TSettings) => {
        newSettings.sprint.length = parseInt(newSettings.sprint.length as unknown as string, 10);
        newSettings.warriors = setSlugsForWarriors(newSettings.warriors);

        setSettings(newSettings);
        setShowSettings(false);
    }

    const { name, length } = settings.sprint;

    return <StyledSettings>
        <h2>Settings</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                labelName="Sprint Name"
                name="sprint.name"
                required={true}
                errorField={errors.sprint?.name}
                register={register}
                defaultValue={name}
            />
            <label htmlFor="sprint.length">
                Length (days)
                <NumberInput name='sprint.length' register={register} defaultValue={length} />
            </label>
            <Warriors
                register={register}
                fields={fields}
                remove={remove}
                append={append}
                control={control}
            />
            <button type="submit">Save</button>
        </form>
    </StyledSettings>
}