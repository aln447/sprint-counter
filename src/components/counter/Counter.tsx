import react, { useState } from 'react';
import { getAllJSDocTags } from 'typescript';
import { TSettings, TWarrior } from '../Wrapper';
import { DayTable } from '../day-table/DayTable';
import { ResultSet } from './ResultSet';
import styled from 'styled-components';

interface CounterProps {
    settings: TSettings;
    setSettings: (settings: TSettings) => void;
};

const StyledCounter = styled.div`
    padding: 15px;
`;

const getDayKeyword = (length: number) => length === 1 ? 'day' : 'days';

export const Counter = ({ settings, setSettings }: CounterProps) => {
    const { sprint: { name, length }, warriors } = settings;

    const setWarriors = (warriors: TWarrior[]) => {
        const newSettings = { ...settings };
        newSettings.warriors = warriors;

        setSettings(newSettings);
    }

    return <StyledCounter>
        <h1>{name}</h1>
        <h3>Sprint length: {length} {getDayKeyword(length)}</h3>
        <DayTable warriors={warriors} setWarriors={setWarriors} length={length} />
        <ResultSet warriors={warriors} length={length} />
    </StyledCounter>
}