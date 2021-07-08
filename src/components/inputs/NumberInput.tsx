import react from 'react';

type NumberInputProps = {
    // TODO: find the type returned here;
    register: (name: string) => any;
    name: string;
}

export const NumberInput = ({ name, register }: NumberInputProps) => {
    return (<input type="number" {...register(name)} />);
}