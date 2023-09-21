import { useState } from "react";

interface InputsProps {
    label: string,
    value: any,
    updateValue(value: any): void
}

const Inputs = ({ label, value, updateValue }: InputsProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => (updateValue(event.target.value))}></input>
        </>
    );
}


export function Form() {

    const [code, setCode] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientCpf, setClientCpf] = useState('');
    const [initDate, setInitDate] = useState('');
    const [finalDate, setFinalDate] = useState('');


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h2>Cadastro de pacote</h2>
                    <form className="input-container">
                        <Inputs label="Código" value={code} updateValue={setCode} />
                        <Inputs label="Nome do cliente" value={clientName} updateValue={setClientName} />
                        <Inputs label="CPF do cliente" value={clientCpf} updateValue={setClientCpf} />
                        <Inputs label="Data inicial" value={initDate} updateValue={setInitDate} />
                        <Inputs label="Data final" value={finalDate} updateValue={setFinalDate} />
                    </form>
                </div>


            </div>
        </>
    );
}