import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

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

  function clienteSelecionado(cliente: Cliente){
    alert(cliente.nome)
  }
  function clienteExluido(cliente: Cliente){
    alert(`Excluir... ${cliente.nome}`)
  }
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExluido}></Tabela>     
      </Layout>
    </div>
  )
}
