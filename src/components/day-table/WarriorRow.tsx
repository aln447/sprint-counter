import React, { useEffect, useState } from "react";
import { css } from "styled-components";
import { setSourceMapRange } from "typescript";
import { TWarrior } from "../Wrapper";

type WarriorRowProps = {
    warrior: TWarrior;
    length: number;
    setScore: (score: number) => void;
};

const generateArrayOf = (value: boolean, length: number) => Array(length).fill(0).map(() => value);

export const WarriorRow = ({ warrior: { name, color, additionals }, length, setScore }: WarriorRowProps) => {


    const [days, setDays] = useState<boolean[]>(generateArrayOf(false, length));

    useEffect(() => {
        setScore(days.filter(Boolean).length);
    }, [days]);

    const fillDaysUntilIndex = (until: number) => {
        setDays(days.map((_, index) => index <= until));
    }

    const toggleDay = (index: number) => {
        const newDays = [...days];

        newDays[index] = !newDays[index];

        setDays(newDays);
    }

    const handleDayClick = (event: React.ChangeEvent, index: number) => {
        days.filter(Boolean).length ? toggleDay(index) : fillDaysUntilIndex(index);
    }

    const handleClear = () => {
        setDays(generateArrayOf(false, length));
    }

    return <tr style={{ color }}>
        <td>{name}</td>
        {days.map((day, index) => <td>
            <input type="checkbox" checked={day} key={index} onChange={(e) => handleDayClick(e, index)} />
        </td>)}
        <td><button onClick={handleClear}>clear</button></td>
    </tr>
}