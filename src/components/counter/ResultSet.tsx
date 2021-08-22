import React from "react";
import styled, { css } from "styled-components";
import { TWarrior } from "../Wrapper";

type ResultSetProps = {
    warriors: TWarrior[];
    length: number;
};

const sum = (accumulator: number, currentValue: number) => accumulator + currentValue;


export const ResultSet = ({ warriors, length }: ResultSetProps) => {
    const score = warriors.map((warrior) => warrior.score).reduce(sum);

    return !!score ? <div>
        <h2>Points for this sprint: <strong>{score}</strong></h2>
        <h4>Explanation:</h4>
        <ul>
            {warriors.map(({ score, name }) => <li>{score} points for {name}</li>)}
        </ul>
    </div> : <React.Fragment />
}