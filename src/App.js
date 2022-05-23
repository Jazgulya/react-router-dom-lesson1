import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';


function App() {
  return (
   <BrowserRouter>
    <Header />
   <Routes>
     <Route path='/' element={<> <Filters /><ProductsList /></>} />
     <Route path='/add' element={<h1>Add form</h1>}  />
     <Route path='/edit' element={<h1>Edit form</h1>}/>
     <Route path='/contacts' element={<h1>Contacts</h1>}/>
   </Routes>
   <h1>Footer</h1>
   </BrowserRouter>
  );
}

export default App;
