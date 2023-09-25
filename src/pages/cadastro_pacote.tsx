import { useState } from "react"
import { Input } from "../components/inputs";
import './cadastro_pacote.css'
import { Pacote } from '../interface/Pacote';
import { pacoteMutate } from "../hooks/pacoteMutate";
 
export function CadastroPacote() {

    const [code, setCode] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientCpf, setClientCpf] = useState('');
    const [initDate, setInitDate] = useState('');
    const [finalDate, setFinalDate] = useState('');


    const {mutate} = pacoteMutate();

    const submit = () => {
        const pacoteData: Pacote = {
            code, 
            clientName,
            clientCpf,
            initDate,
            finalDate
        }
        mutate(pacoteData)
    }

    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="/src/assets/rastreio.png" width="230" height="70"/>
                    </a>
                </div>
            </nav>

            <div className="card" >
                <div className="card-body">
                    <h4 className="card-title text-center"> Cadastro de pacote</h4>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <Input type={"text"} label="Código" value={code} updateValue={setCode} />
                        </div>
                        <div className="col-md-6">
                            <Input type={"text"} label="Nome do cliente" value={clientName} updateValue={setClientName} />
                        </div>
                        <div className="col-md-6">
                            <Input type={"text"} label="CPF do cliente" value={clientCpf} updateValue={setClientCpf} />
                        </div>
                        <div className="col-md-6">
                            <Input type={"date"} label="Data inicial" value={initDate} updateValue={setInitDate} />
                        </div>
                        <div className="col-md-6">
                            <Input type={"date"} label="Data final" value={finalDate} updateValue={setFinalDate} />
                        </div>

                            <div className="botao_cancelar">
                                <button type="button" className="btn btn-danger">Cancelar</button>
                            </div>
                            <div className="botao_cadastrar">
                                <button type="button" onClick={submit} className="btn btn-primary">Cadastrar</button>
                            </div>
                      
                    </form>
                </div>


            </div>
        </>
    );
}

