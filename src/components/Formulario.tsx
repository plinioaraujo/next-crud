import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
   cliente: Cliente
   clienteMudou?: (cliente: Cliente) => void
   cancelado?: () => void
}

const Formulario = function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome,setNome] = useState(props.cliente?.nome ?? '')
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <>
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
                {id ? (
                    <Entrada 
                        texto="Codigo"                         
                        somenteLeitura
                        valor={id}
                        className="mb-4"
                    />

                ):false}
                <Entrada 
                    texto="Nome" 
                    valor={nome}
                    valorMudou={setNome} 
                    className="mb-4"
                    
                />
                
                <Entrada 
                    texto="Idade" 
                    tipo="number" 
                    valor={idade}
                    valorMudou={setIdade}
                    className="mb-4"
                />
                <div className="flex justify-end mt-7">
                    <Botao  cor="blue" className="mr-2" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome,idade,id))}>
                        {id ? 'alterar' : 'Salvar'}
                    </Botao>
                    <Botao 
                        onClick={props.cancelado}
                    >
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>);
}

export default Formulario;