import { useContext, useState } from 'react'
import { GlobalContext } from '../../context'
import './switcher.css'

const Swicher = () => {
  /* De español a ingles */
  const [handleSwitchEN, setHandleSwitchEN] = useState(false)
  /* De ingles a español */
  const [handleSwitchES, setHandleSwitchES] = useState(false)
  const { spanish, setSpanish } = useContext(GlobalContext)

  const handleClick = () => {
    /* Si el contexto esta en true, aplico el setTimeout de 300ms para primero setear el estado  setHandleSwitchEN a true para aplicar la animacion que esta en switcher.css llamada .switch-en, adentro del setTimeout lo vuelvo a setear en false para quitarle la clase*/
    if (spanish) {
      setTimeout(() => {
        setSpanish(false)
        setHandleSwitchEN(false)
      }, 300)
      setHandleSwitchEN(true)
    } else {
      setTimeout(() => {
        setSpanish(true)
        setHandleSwitchES(false)
      }, 300)
      setHandleSwitchES(true)
    }
  }

  return (
    <div className='h-[35px] w-[80px] flex justify-center items-center relative'>
      <button
        /* Las clases switch-en y switch-es son las que se aplican a la animacion */
        className={`h-full w-[35px] bg-secondary rounded-full absolute font-semibold ${
          spanish ? 'left-0' : 'right-0'
        } ${handleSwitchEN ? 'switch-en' : ''} ${
          handleSwitchES ? 'switch-es' : ''
        }`}
        onClick={handleClick}
      >
        {spanish ? 'ES' : 'EN'}
      </button>
      <div className='h-[20px] w-[40px] bg-fondo rounded-xl'></div>
    </div>
  )
}

export default Swicher
