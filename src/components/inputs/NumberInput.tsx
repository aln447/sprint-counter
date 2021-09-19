import react from 'react';
import { InputProps } from './interfaces';

export const NumberInput = ({ name, register, defaultValue }: InputProps<number>) => {
    return (<input type="number" {...register(name)} defaultValue={defaultValue} />);
}