import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import GetUsers from './Pages/Data';
import Addtin from './Pages/Add';
import Eduser from "./Pages/Edit"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetUsers/>}/>
        <Route path='/add' element={<Addtin/>}/>
        <Route path='/edus/:id' element={<Eduser/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
