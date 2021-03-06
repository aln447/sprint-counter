import { Control, UseFormRegister } from 'react-hook-form';
import { WarriorForm } from './WarriorForm';
import { TSettings, TWarrior } from '../Wrapper';
import styled from 'styled-components';


interface WarriorsProps {
    fields: TWarrior[];
    register: UseFormRegister<TSettings>;
    remove: (index: number) => void;
    append: (warrior: TWarrior) => void;
    control: Control<TSettings>;
};

const emptyWarrior: TWarrior = {
    name: '',
    slug: '',
    pointsPerSprint: 0,
    color: '',
    score: 0,
    additionals: [],
}

const TableStyled = styled.table`
    tr td label input {
        margin-left: 0;
    }
`;

export const Warriors = ({ fields, register, remove, append, control }: WarriorsProps) => {
    return (<div className="warriors">
        {fields.length === 0 && <p>No warriors yet. Add a few :)</p>}
        <TableStyled>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Points per sprint</td>
                    <td>Color</td>
                    <td>Additional points</td>
                </tr>
            </thead>
            <tbody>
                {fields.map((field, index) => <WarriorForm
                    key={index}
                    index={index}
                    register={register}
                    remove={remove}
                    field={field}
                    control={control}
                />)}
            </tbody>
        </TableStyled>
        <button onClick={() => append(emptyWarrior)}>Add Warrior</button>
    </div>)
}