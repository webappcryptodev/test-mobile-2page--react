import logo from './logo.svg';
import './App.css';
import Membership from './components/mobile/membership';
import Navbar from './components/navbar/navbar';
import Payment from './components/mobile/payment';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-6'>
          <Membership />            
        </div>
        <div className='col-6'>
          <Payment />
        </div>
      </div>
      
    </div>
  );
}

export default App;
