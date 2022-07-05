import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Form from './Form';
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Form/> */}

      <Routes>
        <Route exact path='/' element={<Form></Form>}/>
      </Routes>
    </>
  );
}

export default App;
