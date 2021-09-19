import react from 'react';
import { FieldError } from 'react-hook-form';
import { ErrorMessage } from '../utils/ErrorMessage';
import { InputProps } from './interfaces';

interface TextInputProps extends InputProps<string> {
    errorField?: FieldError;
    required: boolean;
    labelName?: string;
}

export const TextInput = ({ name, register, required, errorField, labelName, defaultValue }: TextInputProps) => {
    return (<label htmlFor={name}>
        {labelName ?? ''}
        <input type="text" {...register(name, { required: (required ? "This field is required" : false) })} defaultValue={defaultValue} />
        <ErrorMessage error={errorField} />
    </label>);
}