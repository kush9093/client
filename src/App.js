import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header';
import Index from './component';
import Login from './component/login';
import Register from "./component/register";
import { Container } from 'react-bootstrap';


function App() {


  return (
    <BrowserRouter>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />}/>
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
