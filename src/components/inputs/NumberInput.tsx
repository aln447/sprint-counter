import react from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type NumberInputProps = {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
    defaultValue?: number;
}

export const NumberInput = ({ name, register, defaultValue }: NumberInputProps) => {
    return (<input type="number" {...register(name)} defaultValue={defaultValue} />);
}