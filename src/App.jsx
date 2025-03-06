import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './componets/Layout';
import Home from './componets/Home';
import About from './componets/About';
import Services from './componets/Services'
import Contacts from './componets/Contacts';
import Form from './componets/Form';
function App() {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/Contacts' element={<Contacts/>}></Route>
      <Route path='/Form' element={<Form/>}></Route>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;