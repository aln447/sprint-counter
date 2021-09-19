import react from 'react';
import { InputProps } from './interfaces';

export const ColorInput = ({ name, register, defaultValue }: InputProps<string>) => {
    return (<input type="color" {...register(name)} defaultValue={defaultValue} />);
}