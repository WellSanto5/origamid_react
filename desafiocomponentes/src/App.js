import './App.css';
import { Header }from './components/Header'
import { Users } from './components/Users'
import { Products } from './components/Products'

function App({url}) {

  const {pathname} = window.location;
  let Pagina;

  if(pathname == "/users") {
    Pagina = Users;
  } else {
    Pagina = Products
  }

  return(
    <>
      <Header />
      <Pagina />
    </>
  )
}

export default App;
