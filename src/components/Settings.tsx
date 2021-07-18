import react from 'react';
import { TSettings, TWarrior } from './Wrapper';
import { useFieldArray, useForm } from 'react-hook-form';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';
import { WarriorForm } from './WarriorForm';
import styled from 'styled-components';

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

const StyledSettings = styled.div`
    padding: 10px;
    border-radius: 2px;
    box-shadow: 2px 3px 9px 0px #0000006e;

    label {
        width: 100%;
        display: block;
        margin: 5px 0;

        input {
            margin-left: 20px;
            height: 20px;
            border: none;
        }
    }

    .warriors {
        label, 
        button {
            display: inline-block;
            width: auto;
            margin-left: 5px;
        }

        label input:first-of-type {
            margin-left: 0px;
        }

        button {
            height: 20px;
        }
    }

    button {
        background: white;
        border: none;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        cursor: pointer;

        &[type=submit] {
            margin-top: 20px;
            font-weight: bold;
            padding: 15px;
        }
    }
`;


export const Settings = (props: SettingsProps) => {
    const { settings, setSettings } = props;
    const { handleSubmit, register, control } = useForm({ defaultValues: defaultSprintSettings });
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
            <label htmlFor="sprint.name">
                Sprint Name
                <TextInput name='sprint.name' register={register} />
            </label>
            <label htmlFor="sprint.length">
                Length (days)
                <NumberInput name='sprint.length' register={register} />
            </label>
            <div className="warriors">
                {fields.length === 0 && <p>No warriors yet. Add some :)</p>}
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