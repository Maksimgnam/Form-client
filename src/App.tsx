

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Dashboard from './components/Dashboard';


function App() {

  return (
    <BrowserRouter>
   
        <div className=' w-full min-h-screen s'>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>

            </Routes>
          

        </div>
    </BrowserRouter>
   
  )
}

export default App
