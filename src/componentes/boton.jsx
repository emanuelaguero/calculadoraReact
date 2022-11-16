import '../estilos/boton.css'
const Boton = (props) => {

    const esOperador = (valor) => {
        return (isNaN(valor) && (valor!='.') && (valor!='=') )
    }
    return (
        <div>
            <button onClick={()=>props.mostrar(props.children)} className={`estilo-boton ${esOperador(props.children) ? 'estilo-operador' : ''}`.trimEnd()}>{props.children} </button>
        </div>
    )
}

export default Boton