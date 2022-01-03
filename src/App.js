import logo from './logo.svg';
import './App.css';
import Membership from './components/mobile/membership';
import Navbar from './components/navbar/navbar';
import Payment from './components/mobile/payment';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
          <Membership />  
          <div className='mt-6'></div>          
          <Payment />
      
      
    </div>
  );
}

export default App;
