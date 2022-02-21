import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/colecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {

  const { tabelaVisivel, formularioVisivel , exibirFormulario, exibirTabela} = useTabelaOuForm()
  
  const repositorioCliente: ClienteRepositorio = new ColecaoCliente()
  const [cliente, setCliente] = useState(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    obterTodos()
  }, [])

  function obterTodos() {
    repositorioCliente.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }
  async function excluirCliente(cliente: Cliente) {
      
      await repositorioCliente.excluir(cliente)
      obterTodos()
   
  }

  async function salvarCliente(cliente: Cliente) {
    await repositorioCliente.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    clientes,
    cliente ,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela 
  }


}
