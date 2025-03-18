import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';  
import LoadingPage from './components/loadingPage/loadingPage'; 
import MainScreen from "./components/MainScreen/MainScreen"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
