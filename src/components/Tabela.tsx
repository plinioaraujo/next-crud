import Cliente from "../core/Cliente";
import { botaoAcaoEdicao, botaoAcaoExclusao } from "./BotaoAcao";

import { IconeEdicao, IconeExclusão } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

function Tabela(props: TabelaProps) {


    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
        <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            {exibirAcoes ?<th className="p-4"> Ações </th>: false}
        </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    <td className="text-left p-4">
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                    </td>
                </tr>
            )

        })

    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? 

                    <button onClick={()=> props.clienteSelecionado?.(cliente)} className={botaoAcaoEdicao}>
                        {IconeEdicao}
                    </button>
                 : false}

                {props.clienteExcluido ? 
                    <button onClick={()=> props.clienteExcluido?.(cliente)} className={botaoAcaoExclusao}>
                        {IconeExclusão}
                    </button>
                 : false}
            </td>
        )
    }

    return (
        <>
            <table className={"w-full overflow-hidden rounded-xl"}>
                <thead className={`
                    bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100 
                `}>
                    {renderizarCabecalho()}
                </thead>
                <tbody>
                    {renderizarDados()}
                </tbody>
            </table>
        </>
    );
}

export default Tabela;
