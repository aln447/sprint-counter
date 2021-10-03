import { FieldPath, UseFormRegister } from "react-hook-form";
import { TSettings } from "../Wrapper";

export interface InputProps<T> {
    register: UseFormRegister<TSettings>;
    name: FieldPath<TSettings>;
    defaultValue?: T;
}