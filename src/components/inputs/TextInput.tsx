import react from 'react';

type TextInputProps = {
    // TODO: find the type returned here;
    register: (name: string) => any;
    name: string;
}

export const TextInput = ({ name, register }: TextInputProps) => {
    return (<input type="text" {...register(name)} />);
}