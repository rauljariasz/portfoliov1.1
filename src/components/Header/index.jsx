import Swicher from './Swicher'
import Logo from '/Logo.png'

const Header = () => {
  return (
    <header className='h-[55px] px-8 lg:px-[200px] flex w-full justify-between items-center relative bg-tertiary'>
      <div>
        <img src={Logo} alt='Logo RJ' className='w-[72px] h-[48px]' />
      </div>
      <div className='relative'>
        <Swicher />
      </div>
    </header>
  )
}

export default Header
