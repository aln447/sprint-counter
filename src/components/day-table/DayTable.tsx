import styled from "styled-components";
import { TWarrior } from "../Wrapper";
import { WarriorRow } from "./WarriorRow";

type DayTableProps = {
    warriors: TWarrior[];
    setWarriors: (warriors: TWarrior[]) => void;
    length: number;
};

const StyledTable = styled.table`
    tr {
        background: var(--dkbl2);
        &.filled {
            background: var(--orng2);
        }

        td {
            padding: 5px;
            border-radius: 2px;

            &.filled {
                background: var(--orng2);
            }

            input {
                cursor: pointer;
            }

            &.table__color-cell div {
                border-radius: 2px;
                width: 10px;
                height: 10px;
            }
        }
    }
`;

export const DayTable = ({ warriors, length, setWarriors }: DayTableProps) => {
    const updateWarriorScore = (index: number, score: number) => {
        const newWarriors = [...warriors];
        warriors[index].score = score;

        setWarriors(newWarriors);
    }

    return <StyledTable>
        <tbody>
            {warriors.map((warrior, index) => <WarriorRow
                warrior={warrior}
                length={length}
                setScore={(score) => updateWarriorScore(index, score)} key={warrior.slug}
            />)}
        </tbody>
    </StyledTable>
}