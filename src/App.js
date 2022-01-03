import logo from './logo.svg';
import './App.css';
import Membership from './components/mobile/membership';
import Navbar from './components/navbar/navbar';
import Payment from './components/mobile/payment';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
        <Route path={"/member"} element={<Membership />} />
        <Route path={"/payment"} element={<Payment />} />
      </Routes> */}
      <Membership />
      <Payment />
    </div>
  );
}

export default App;
