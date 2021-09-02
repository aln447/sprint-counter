import { Settings } from './Settings';
import react from 'react';
import { CounterWrapper } from './counter/CounterWrapper';
import { useState } from 'react';
import { StyledWrapper } from '../styled/StyledWrapper';

export type TAdditionalWarriorSetting = {
    points: number;
    reason: string;
}
export type TWarrior = {
    name: string;
    slug: string;
    color: string;
    pointsPerSprint: number;
    score: number;
    additionals: TAdditionalWarriorSetting[];
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
        <CounterWrapper settings={settings} setSettings={setSettings} />
    </StyledWrapper>;
}