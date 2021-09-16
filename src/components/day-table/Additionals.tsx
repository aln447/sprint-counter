import { FunctionComponent } from "react";
import { TAdditionalWarriorSetting } from "../Wrapper";

interface AdditonalsProps {
    additionals: TAdditionalWarriorSetting[];
}

export const Additonals: FunctionComponent<AdditonalsProps> = ({ additionals }) => {
    return <>
        {additionals.map((additional, index) => <td title={additional.reason} key={index}>
            <strong>{additional.points}</strong>
        </td>)}
    </>;
}