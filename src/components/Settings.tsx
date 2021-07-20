import react from 'react';
import { TSettings, TWarrior } from './Wrapper';
import { useFieldArray, useForm } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';
import { WarriorForm } from './WarriorForm';
import { ErrorMessage } from './utils/ErrorMessage';
import { StyledSettings } from '../styled/StyledSettings';

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
    const { handleSubmit, register, control, formState: { errors } } = useForm({ defaultValues: defaultSprintSettings });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'warriors'
    })
    const onSubmit = (newSettings: any) => {

        console.log(newSettings);
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
            <div className="warriors">
                {fields.length === 0 && <p>No warriors yet. Add a few :)</p>}
                {fields.map((field, index) => <WarriorForm
                    key={field.id}
                    index={index}
                    register={register}
                    remove={remove}
                />)}
                <button onClick={() => append(emptyWarrior)}>Add Warrior</button>
            </div>
            <button type="submit">Save</button>
        </form>
    </StyledSettings>
}