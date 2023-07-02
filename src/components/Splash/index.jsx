import { useState } from 'react'
import circleLogo from '/circuloLogo.png'
import './splash.css'
import { useEffect } from 'react'

const Splash = () => {
  const [exit, setExit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setExit(true)
    }, 2000)
  }, [])

  /* Evitar scroll en el body cuando el splash este abierto */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [exit])

  return (
    <div
      className={`${
        exit && 'fade-out'
      } w-screen h-screen bg-fondo flex justify-center items-center fixed z-[1000]`}
    >
      <img
        src={circleLogo}
        alt='Logo'
        className={`${
          exit && 'slide-out-elliptic-top-bck'
        } w-[200px] border border-textcolor rounded-full pulsate-fwd `}
      />
    </div>
  )
}

export default Splash
