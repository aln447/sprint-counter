import { Settings } from './Settings';
import react from 'react';
import { Counter } from './Counter';

type TWarrior = {
    name: string;
    slug: string;
    color: string;
}

type TSprint = {
    name: string;
    length: number;
    pointsPerWorkday: number;
}

type TSettings = {
    warriors: TWarrior[];
    sprint: TSprint;
}

export const Wrapper = () => {
    return <div>
        <h2>I'm the wrapper</h2>
        <Settings />
        <Counter />
    </div>;
}