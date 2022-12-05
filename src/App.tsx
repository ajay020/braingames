import {Route, Routes} from 'react-router-dom'

import BlockContainer from './components/blockContainer/BlockContainer'
import ColorMatch from './pages/colorMatch/ColorMatch'
import Home from './pages/home/Home'
// import './App.css';


function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/identify-color' element={<ColorMatch/>}/>
            <Route path='/match-pair' element={<BlockContainer/>}/>
        </Routes>
    </div>
  )
}

export default App
