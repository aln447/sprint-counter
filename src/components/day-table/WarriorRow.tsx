import React, { useState } from "react";
import { css } from "styled-components";
import { setSourceMapRange } from "typescript";
import { TWarrior } from "../Wrapper";

type WarriorRowProps = {
    warrior: TWarrior;
    length: number;
    setScore: (score: number) => void;
};


export const WarriorRow = ({ warrior: { name, color, additionals }, length, setScore }: WarriorRowProps) => {
    const [days, setDays] = useState<boolean[]>(Array(length).fill(0).map(() => false));

    const toggleDay = (index: number) => {
        const newDays = [...days];

        newDays[index] = !newDays[index];

        setDays(newDays);
    }

    const handleDayClick = (event: React.ChangeEvent, index: number) => {
        toggleDay(index);
        setScore(index);
    }

    return <table style={{ color }}>
        <tbody>
            <tr>
                <td>{name}</td>
                {days.map((day, index) => <td>
                    <input type="checkbox" checked={day} key={index} onChange={(e) => handleDayClick(e, index)} />
                </td>)}
            </tr>
        </tbody>
    </table>
}