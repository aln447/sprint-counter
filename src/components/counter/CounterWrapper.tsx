import react from 'react';
import { TSettings } from '../Wrapper';
import { Counter } from './Counter';

interface CounterWrapperProps {
    settings?: TSettings;
    setSettings: (settings: TSettings) => void;
};

export const CounterWrapper = ({ settings, setSettings }: CounterWrapperProps) => (
    settings ? <Counter settings={settings} setSettings={setSettings} /> : <div>
        Please provide the settings first
    </div>
);