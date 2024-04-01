import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

function App() {

  return (
    <BrowserRouter>

      <div className='bg-[#14161a] text-white min-h-[100%] overflow-hidden '>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}  />
          <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
