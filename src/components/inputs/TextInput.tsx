import react from 'react';
import { FieldError, FieldPath, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '../utils/ErrorMessage';
import { TSettings } from '../Wrapper';

type TextInputProps = {
    register: UseFormRegister<TSettings>;
    errorField?: FieldError;
    name: FieldPath<TSettings>;
    required: boolean;
    labelName: string;
}

export const TextInput = ({ name, register, required, errorField, labelName }: TextInputProps) => {
    return (<label htmlFor={name}>
        {labelName}
        <input type="text" {...register(name, { required: (required ? "This field is required" : false) })} />
        <ErrorMessage error={errorField} />
    </label>);
}