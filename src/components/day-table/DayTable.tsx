import { TWarrior } from "../Wrapper";
import { WarriorRow } from "./WarriorRow";

type DayTableProps = {
    warriors: TWarrior[];
    setWarriors: (warriors: TWarrior[]) => void;
    length: number;
};


export const DayTable = ({ warriors, length }: DayTableProps) => {
    const updateWarriorScore = (index: number, score: number) => {
        console.log(`I'll set ${score} for ${warriors[index].name}`);
    }

    return <table>
        <tbody>
            {warriors.map((warrior, index) => <WarriorRow
                warrior={warrior}
                length={length}
                setScore={(score) => updateWarriorScore(index, score)} key={warrior.slug}
            />)}
        </tbody>
    </table>
}