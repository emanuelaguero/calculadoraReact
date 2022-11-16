import { useState, useEffect } from 'react'
import './App.css'
import Boton from './componentes/boton.jsx'
import BotonLimpiar from './componentes/botonLimpiar.jsx'
import Visor from './componentes/visor.jsx'
import { evaluate } from 'mathjs'

function App() {



  const [valorEntrada, setValorEntrada] = useState(' ')


  const mostrar = (valor) => {
    return (
      <div>
        {setValorEntrada(valorEntrada + valor)}
      </div>

    )
  };

  const limpiar = () => {
    setValorEntrada('')
  }
  const resultado = () => {
    if (valorEntrada) {
      setValorEntrada(evaluate(valorEntrada))
    } else {
      alert("Ingrese Valores para realizar los calculos")
    }

  };



  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1>Calculadora</h1>
      </div>
      <div className='contenedor-calculadora'>

        <Visor valor={valorEntrada} />

        <div className='fila'>
          <Boton mostrar={mostrar}>1</Boton>
          <Boton mostrar={mostrar}>2</Boton>
          <Boton mostrar={mostrar}>3</Boton>
          <Boton mostrar={mostrar}>+</Boton>
        </div>
        <div className='fila'>
          <Boton mostrar={mostrar}>4</Boton>
          <Boton mostrar={mostrar}>5</Boton>
          <Boton mostrar={mostrar}>6</Boton>
          <Boton mostrar={mostrar}>-</Boton>
        </div>
        <div className='fila'>
          <Boton mostrar={mostrar}>7</Boton>
          <Boton mostrar={mostrar}>8</Boton>
          <Boton mostrar={mostrar}>9</Boton>
          <Boton mostrar={mostrar}>*</Boton>
        </div>
        <div className='fila'>
          <Boton mostrar={resultado}>=</Boton>
          <Boton mostrar={mostrar}>0</Boton>
          <Boton mostrar={mostrar}>.</Boton>
          <Boton mostrar={mostrar}>/</Boton>
        </div>

        <BotonLimpiar mostrar={limpiar}>Limpiar</BotonLimpiar>




      </div>
    </div>
  )
}

export default App
