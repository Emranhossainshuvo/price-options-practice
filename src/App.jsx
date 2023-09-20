import './App.css'
import PriceOptions from './PriceOptions/PriceOptions'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className='container mx-auto'>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
    </div>
  )
}

export default App
