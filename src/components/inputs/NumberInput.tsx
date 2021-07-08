import react from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type NumberInputProps = {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
}

export const NumberInput = ({ name, register }: NumberInputProps) => {
    return (<input type="number" {...register(name)} />);
}