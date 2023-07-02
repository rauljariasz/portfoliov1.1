import { useContext } from 'react'
import { GlobalContext } from '../../context'

const Home = () => {
  const { spanish } = useContext(GlobalContext)

  return (
    <main className='bg-fondo'>
      <h1 className='text-[55px] font-bold leading-[0.8] md:text-[110px] py-10'>
        Raul Arias
      </h1>
      <p>{spanish ? 'Desarrollador web' : 'Web developer'}</p>
    </main>
  )
}

export default Home
