import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import ColeccionesPage from './pages/ColeccionesPage/ColeccionesPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} ></Route >
            <Route path='/faq' element={<FAQ />} ></Route >
            <Route path='/collection' element={<ColeccionesPage />} ></Route >
          </Routes >
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
