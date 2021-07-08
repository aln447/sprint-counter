import react from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type TextInputProps = {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
}

export const TextInput = ({ name, register }: TextInputProps) => {
    return (<input type="text" {...register(name)} />);
}