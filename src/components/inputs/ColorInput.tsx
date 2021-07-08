import react from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type ColorInputProps = {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
}

export const ColorInput = ({ name, register }: ColorInputProps) => {
    return (<input type="color" {...register(name)} />);
}