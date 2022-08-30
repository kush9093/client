import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/nav';
import Index from './component';
import Login from './component/login';
import Register from "./component/register";
import { Container } from 'react-bootstrap';
import AccountAPI from './component/servise/accountAPI';
import HistoryAPI from './component/servise/historyAPI';
import { useEffect, useState } from 'react';
import History from './component/history';
import Report from './component/report';

// cmd ==> ipconfig
const accountAPI = new AccountAPI("http://192.168.4.97:8080")
const historyAPI = new HistoryAPI("http://192.168.4.97:8080")

function App() {
    const [logon,setLogon] = useState(null);

    useEffect(()=>{
      if(localStorage.getItem("token")){
        setLogon(localStorage.getItem("email"));

        /*
        accountAPI.validation(localStorage.getItem("token"))
        .then(received=>{
          if(received.result){
            setLogon(received.email);
          }
        })
        */
      }
    })

  return (
    <BrowserRouter>
      <Nav logon={logon} setLogon={setLogon} />
        <Container>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/login" element={<Login accountAPI={accountAPI} setLogon={setLogon} />} />
            <Route path="/history" element={<History historyAPI={historyAPI} logon={logon}/>}/>
            <Route path="/register" element={<Register accountAPI={accountAPI} />}/>
            <Route path="/report" element={<Report historyAPI={historyAPI} />} />
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
