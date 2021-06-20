import react from 'react';
import { TSettings } from './Wrapper';

type SettingsProps = {
    settings: TSettings,
    setSettings: (settings: TSettings) => void;
}

export const Settings = (props: SettingsProps) => {
    return <div>I'm the settings</div>
}