import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente]=useState(Cliente.vazio)
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 20, '2'),
    new Cliente('Carlos', 45, '3'),
    new Cliente('José', 55, '4'),
    new Cliente('Alberto', 25, '5'),
    new Cliente('Amelia', 22, '6'),
    new Cliente('Vanessa', 30, '7'),
    new Cliente('Adriana', 47, '8'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExluido(cliente: Cliente) {
    alert(`Excluir... ${cliente.nome}`)
  }

  function salvaCliente(cliente:Cliente) {    
    setVisivel('tabela')
  }

  function novoCliente() {    
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel == 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4"
                cor="green"
                onClick={() => setVisivel('form')}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExluido}
              />
          </>
        ) : (
          <>
            <div className="flex justify-end">
              <Botao 
                className="mb-4" 
                cor="green" 
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Formulario
              cliente={cliente}
              clienteMudou={salvaCliente}
              cancelado={() => setVisivel('tabela')}
              

            />
          </>
        )}

      </Layout>
    </div>
  )
}
