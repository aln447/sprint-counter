import react from 'react';
import { FieldError } from 'react-hook-form';

type ErrorMessageProps = {
    error?: FieldError
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => (
    error ? <span> {error.message}</span> : <react.Fragment />
)