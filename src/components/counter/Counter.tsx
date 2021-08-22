import react from 'react';
import { TSettings } from '../Wrapper';

type CounterProps = {
    settings?: TSettings;
};

export const Counter = ({ settings }: CounterProps) => {
    return <div>I'm the counter</div>
}