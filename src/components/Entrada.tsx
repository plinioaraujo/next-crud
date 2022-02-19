interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void

}
function Entrada(props: EntradaProps) {
    return (
        <>
            <div className={`flex flex-col ${props.className}`}>
                <label className="mb-4">
                    {props.texto}
                </label>
                <input
                    type={props.tipo ?? 'text'} 
                    value={props.valor } 
                    readOnly={props.somenteLeitura}
                    onChange={ e=> props.valorMudou?.(e.target.value) }
                    className={`
                        border
                        border-purple-500
                        rounded-lg
                        px-4
                        py-2
                        focus:outline-none
                        bg-gray-100
                       ${props.somenteLeitura ? '' : 'focus:bg-white'}
                    `}
                />
            </div>
        </>
    );
}

export default Entrada;