import { TWarrior } from "../Wrapper";

type ResultSetProps = {
    warriors: TWarrior[];
    length: number;
};

const sum = (accumulator: number, currentValue: number) => accumulator + currentValue;

export const ResultSet = ({ warriors, length }: ResultSetProps) => {
    let score = 0;
    let additionalScore = 0;

    const getScorePerWarrior = (warrior: TWarrior) => warrior.score * warrior.pointsPerSprint / length;

    warriors.forEach((warrior) => {
        if (!warrior.score) {
            return;
        }

        additionalScore += warrior.additionals.length
            ? warrior.additionals.map((additional) => +additional.points).reduce(sum)
            : 0;

        score += getScorePerWarrior(warrior);
    });

    return !!score ? <div>
        <h2>Points for this sprint: <strong>{score + additionalScore}</strong></h2>
        <h4>Explanation:</h4>
        <ul>
            {warriors.map((warrior, index) => {
                return warrior.score
                    ? <li key={index}>{getScorePerWarrior(warrior)} points for {warrior.name} {
                        warrior.additionals.length
                            ? <span> with {warrior.additionals.map(({ points, reason }, aIndex) => <span key={aIndex}>{points} for {reason}</span>)}</span>
                            : ''
                    } </li>
                    : '';
            })}
        </ul>
    </div> : <></>
}