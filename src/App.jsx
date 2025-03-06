import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './componets/Layout';
import Home from './componets/Home';
function App() {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;