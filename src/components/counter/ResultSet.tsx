import { TWarrior } from "../Wrapper";

type ResultSetProps = {
    warriors: TWarrior[];
    length: number;
};

const sum = (accumulator: number, currentValue: number) => accumulator + currentValue;


export const ResultSet = ({ warriors, length }: ResultSetProps) => {
    let score = 0;
    let additionalScore = 0;

    warriors.forEach((warrior) => {
        additionalScore += warrior.score && warrior.additionals.length
            ? warrior.additionals.map((additional) => +additional.points).reduce(sum)
            : 0;

        score += warrior.score;
    });

    return !!score ? <div>
        <h2>Points for this sprint: <strong>{score + additionalScore}</strong></h2>
        <h4>Explanation:</h4>
        <ul>
            {warriors.map(({ score, name, additionals }, index) => {
                return score
                    ? <li key={index}>{score} points for {name} {
                        additionals.length
                            ? <span> with {additionals.map(({ points, reason }, aIndex) => <span key={aIndex}>{points} for {reason}</span>)}</span>
                            : ''
                    } </li>
                    : '';
            })}
        </ul>
    </div> : <></>
}