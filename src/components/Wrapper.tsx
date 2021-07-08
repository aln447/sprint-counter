import { Settings } from './Settings';
import react from 'react';
import { Counter } from './Counter';
import { useState } from 'react';
import styled from 'styled-components';

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

const StyledWrapper = styled.div`
    div {
        margin: 5px;
    }
`;

export const Wrapper = () => {
    const [settings, setSettings] = useState<TSettings>(defaultSettings);

    return <StyledWrapper>
        <h2>I'm the wrapper</h2>
        <Settings settings={settings} setSettings={setSettings} />
        <Counter />
    </StyledWrapper>;
}