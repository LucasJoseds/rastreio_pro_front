import { useState } from "react";
import './form.css'

interface InputsProps {
    label: string,
    value: any,
    type: any,
    updateValue(value: any): void
}

export const Input = ({ label, value, type, updateValue }: InputsProps) => {
    return (
        <>
            <label className="form-label">{label}</label>
            <input className="form-control" type={type} value={value} onChange={event => (updateValue(event.target.value))}></input>
        </>
    );
}

