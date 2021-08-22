import react from 'react';
import { TSettings } from '../Wrapper';
import { Counter } from './Counter';

type CounterWrapperProps = {
    settings?: TSettings;
};

export const CounterWrapper = ({ settings }: CounterWrapperProps) => (
    settings ? <Counter settings={settings} /> : <div>
        Please provide the settings first
    </div>
);