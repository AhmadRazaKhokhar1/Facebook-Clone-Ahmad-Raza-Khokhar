import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';

import Watch from './Components/Watch/Watch'
import Home from './Components/Home/Home'
import Group from './Components/Group/Group'
import Game from './Components/Game/Game'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
            <Routes>
                <Route  path='/' index element={<Home />}/>
                <Route  path='/Watch' element={<Watch />}/>
                <Route  path='/Group' element={<Group />}/>
                <Route  path='/Game' element={<Game />}/>
                <Route  path='*' element={<PageNotFound />}/>
            </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
