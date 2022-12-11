import {Route, Routes} from 'react-router-dom'

import BlockContainer from './components/blockContainer/BlockContainer'
import ColorMatch from './pages/colorMatch/ColorMatch'
import Home from './pages/home/Home'
import Page404 from './pages/page404/page404'


function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/identify-color' element={<ColorMatch/>}/>
            <Route path='/match-pair' element={<BlockContainer/>}/>
            <Route path='*' element={<Page404/>}/>

        </Routes>
    </div>
  )
}

export default App
