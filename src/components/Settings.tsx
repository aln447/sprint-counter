import react from 'react';
import { TSettings } from './Wrapper';
import { useForm } from 'react-hook-form';

type SettingsProps = {
    settings: TSettings,
    setSettings: (settings: TSettings) => void;
}

export const Settings = (props: SettingsProps) => {
    const { settings, setSettings } = props;
    const { handleSubmit, register } = useForm();

    const onSubmit = (newSettings: TSettings) => {
        console.log(newSettings);
        setSettings(newSettings)
    }

    return <div>
        <header>Settings</header>
        <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
}