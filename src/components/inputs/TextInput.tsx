import react from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type TextInputProps = {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
    required: boolean;
}

export const TextInput = ({ name, register, required }: TextInputProps) => {
    return (<input type="text" {...register(name, { required: required ? "This field is required" : false })} />);
}