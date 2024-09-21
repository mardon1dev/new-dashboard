import './App.css'
import Routers from './Routes/Routers'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex'>
      <Navbar />
      <Routers />
    </div>
  )
}

export default App
