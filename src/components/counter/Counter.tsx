import react, { useState } from 'react';
import { getAllJSDocTags } from 'typescript';
import { TSettings, TWarrior } from '../Wrapper';
import { DayTable } from '../day-table/DayTable';
import { ResultSet } from './ResultSet';
import styled from 'styled-components';

type CounterProps = {
    settings: TSettings;
};

const StyledCounter = styled.div`
    padding: 15px;
`;

const getDayKeyword = (length: number) => length === 1 ? 'day' : 'days';

export const Counter = ({ settings: { sprint: { name, length }, warriors: initialWarriors } }: CounterProps) => {
    const [warriors, setWarriors] = useState<TWarrior[]>(initialWarriors);

    return <StyledCounter>
        <h1>{name}</h1>
        <h3>Sprint length: {length} {getDayKeyword(length)}</h3>
        <DayTable warriors={warriors} setWarriors={setWarriors} length={length} />
        <ResultSet />
    </StyledCounter>
}