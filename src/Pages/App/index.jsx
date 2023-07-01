import { useContext } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { GlobalContext } from '../../context'
import Home from '../Home'
import Splash from '../../components/Splash'
import Header from '../../components/Header'
import Layout from '../../layout'

const AppRoutes = () => {
  let routes = useRoutes([{ path: '/', element: <Home /> }])

  return routes
}

function App() {
  const { splash } = useContext(GlobalContext)

  return (
    <BrowserRouter>
      {splash ? <Splash /> : null}
      <Header />
      <Layout>
        <AppRoutes />
        {/* <Navbar /> */}
        {/* <Contact /> */}
      </Layout>
    </BrowserRouter>
  )
}

export default App
