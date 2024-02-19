import './App.css'
import { Background } from './components/background.jsx' ;
import { Foreground } from './components/Foreground.jsx';

function App() {
  return (
<div className=' relative w-full h-screen bg-zinc-800 '>
<Background/>
<Foreground/>


</div>
  )
}

export default App
