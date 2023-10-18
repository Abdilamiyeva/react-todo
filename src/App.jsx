import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Read from './pages/Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div>
    <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/create' element={<Create/>}></Route>
              <Route path='/update/:id' element={<Update/>}></Route>
              <Route path='/update/:id' element={<Update/>}></Route>
              <Route path='/read/:id' element={<Read/>}></Route>

            </Routes>
    </BrowserRouter>
  </div>
    
  )
} 

export default App