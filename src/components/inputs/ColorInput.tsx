import react from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type ColorInputProps = {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
    defaultValue?: string;
}

export const ColorInput = ({ name, register, defaultValue }: ColorInputProps) => {
    return (<input type="color" {...register(name)} defaultValue={defaultValue} />);
}