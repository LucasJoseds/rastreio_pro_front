import { useState } from "react";
import './form.css'

interface InputsProps {
    label: string,
    value: any,
    type: any,
    updateValue(value: any): void
}

const Inputs = ({ label, value, type, updateValue }: InputsProps) => {
    return (
        <>
            <label className="form-label">{label}</label>
            <input className="form-control" type={type} value={value} onChange={event => (updateValue(event.target.value))}></input>
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
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                            RASTREIO PRO
                    </a>
                </div>
            </nav>

            <div className="card" >
                <div className="card-body">
                    <h4 className="card-title"> Cadastro de pacote</h4>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <Inputs type={"text"} label="Código" value={code} updateValue={setCode} />
                        </div>
                        <div className="col-md-6">
                            <Inputs type={"text"} label="Nome do cliente" value={clientName} updateValue={setClientName} />
                        </div>
                        <div className="col-md-6">
                            <Inputs type={"text"} label="CPF do cliente" value={clientCpf} updateValue={setClientCpf} />
                        </div>
                        <div className="col-md-6">
                            <Inputs type={"date"} label="Data inicial" value={initDate} updateValue={setInitDate} />
                        </div>
                        <div className="col-md-6">
                            <Inputs type={"date"} label="Data final" value={finalDate} updateValue={setFinalDate} />
                        </div>
                    </form>
                </div>


            </div>
        </>
    );
}