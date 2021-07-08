import { Settings } from './Settings';
import react from 'react';
import { Counter } from './Counter';
import { useState } from 'react';

export type TWarrior = {
    name: string;
    slug: string;
    color: string;
    pointsPerWorkday: number;
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

    return <div>
        <h2>I'm the wrapper</h2>
        <Settings settings={settings} setSettings={setSettings} />
        <Counter />
    </div>;
}