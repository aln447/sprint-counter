import react from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type NumberInputProps = {
    // TODO: find the type returned here;
    register: UseFormRegister<TSettings>;
    name: string;
}

export const NumberInput = ({ name, register }: NumberInputProps) => {
    return (<input type="number" {...register(name)} />);
}