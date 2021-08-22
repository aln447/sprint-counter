import react from 'react';
import { getAllJSDocTags } from 'typescript';
import { TSettings } from '../Wrapper';
import { DayTable } from '../day-table/DayTable';
import { ResultSet } from './ResultSet';

type CounterProps = {
    settings: TSettings;
};

const getDayKeyword = (length: number) => length === 1 ? 'day' : 'days';

export const Counter = ({ settings: { sprint: { name, length }, warriors } }: CounterProps) => {
    return <div>
        <h1>{name}</h1>
        <h3>Sprint length: {length} {getDayKeyword(length)}</h3>
        <DayTable />
        <ResultSet />
    </div>
}