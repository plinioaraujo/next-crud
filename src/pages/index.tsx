import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/colecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repositorioCliente: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente]=useState(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])
 
  useEffect(() =>{
    obterTodos()
  }, [])

  function obterTodos(){
    repositorioCliente.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
      })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  async function clienteExluido(cliente: Cliente) {
    await repositorioCliente.excluir(cliente) 
    obterTodos()
  }

  async function salvaCliente(cliente:Cliente) {   
   await repositorioCliente.salvar(cliente) 
    obterTodos()
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
