import { Settings } from './Settings';
import react from 'react';
import { Counter } from './Counter';

export const Wrapper = () => {
    return <div>
        <h2>I'm the wrapper</h2>
        <Settings />
        <Counter />
    </div>;
}