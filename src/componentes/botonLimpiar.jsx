import '../estilos/botonLimpiar.css'
const BotonLimpiar = (props) => {

   
    return (

        <div className="boton-limpiar" onClick={()=>props.mostrar()}>
            {props.children} 
        
        </div>
        
    )
}

export default BotonLimpiar