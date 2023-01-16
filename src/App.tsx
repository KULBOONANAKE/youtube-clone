import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Search from './page/Search'
import Watch from './page/Watch'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/watch/:id' element={<Watch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
