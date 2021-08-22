import { css } from "styled-components";
import { TWarrior } from "../Wrapper";

type ResultSetProps = {
    warriors: TWarrior[];
    length: number;
};

const sum = (accumulator: number, currentValue: number) => accumulator + currentValue;

export const ResultSet = ({ warriors, length }: ResultSetProps) => {
    const score = warriors.map((warrior) => warrior.score).reduce(sum);

    return <div>
        <h2>Points for this sprint: <strong>{score}</strong></h2>
    </div>
}