import { useEffect, useState } from "react";
import { TWarrior } from "../Wrapper";
import { Additonals } from "./Additionals";

interface WarriorRowProps {
    warrior: TWarrior;
    length: number;
    setScore: (score: number) => void;
};

const generateArrayOf = (value: boolean, length: number) => Array(length).fill(0).map(() => value);

const getScore = (days: boolean[]) => days.filter(Boolean).length;

export const WarriorRow = ({ warrior: { name, pointsPerSprint, color, additionals }, length, setScore }: WarriorRowProps) => {
    const [days, setDays] = useState<boolean[]>(generateArrayOf(false, length));

    useEffect(() => {
        setScore(getScore(days));
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
        getScore(days) ? toggleDay(index) : fillDaysUntilIndex(index);
    }

    const handleClear = () => {
        setDays(generateArrayOf(false, length));
    }

    const handleFill = () => {
        setDays(generateArrayOf(true, length));
    }

    return <tr className={`${getScore(days) === length ? 'filled' : ''}`}>
        <td className='table__color-cell'><div style={{ backgroundColor: color }}></div></td>
        <td>{name} ({pointsPerSprint})</td>
        {
            days.map((day, index) => <td className={`${day ? 'filled' : ''}`} key={index}>
                <input type="checkbox" checked={day} key={index} onChange={(e) => handleDayClick(e, index)} />
            </td>)
        }
        <td>
            {getScore(days)
                ? <button onClick={handleClear}>clear</button>
                : <button onClick={handleFill}>fill</button>
            }
        </td>
        <Additonals additionals={additionals} />
    </tr >
}