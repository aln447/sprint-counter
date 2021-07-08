import react from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TSettings } from '../Wrapper';

type TextInputProps = {
    register: UseFormRegister<TSettings>;
    name: string;
}

export const TextInput = ({ name, register }: TextInputProps) => {
    return (<input type="text" {...register(name)} />);
}