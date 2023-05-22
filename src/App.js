import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
