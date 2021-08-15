import { Settings } from './Settings';
import react from 'react';
import { Counter } from './counter/Counter';
import { useState } from 'react';
import { StyledWrapper } from '../styled/StyledWrapper';

export type TWarrior = {
    name: string;
    slug: string;
    color: string;
    pointsPerSprint: number;
}

export type TSprint = {
    name: string;
    length: number;
}

export type TSettings = {
    warriors: TWarrior[];
    sprint: TSprint;
}

const defaultSettings: TSettings = {
    warriors: [],
    sprint: {
        name: '',
        length: 0,
    }
};

export const Wrapper = () => {
    const [settings, setSettings] = useState<TSettings>(defaultSettings);
    const [showSettings, setShowSettings] = useState<boolean>(true);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    }

    return <StyledWrapper>
        <h2>I'm the wrapper</h2>
        {showSettings
            ? <Settings settings={settings} setSettings={setSettings} setShowSettings={setShowSettings} />
            : <button onClick={toggleSettings}>Show Settings</button>
        }
        <Counter settings={settings} />
    </StyledWrapper>;
}