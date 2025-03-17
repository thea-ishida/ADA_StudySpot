import './App.css'
//import Login from './components/login/login';
import { useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/loadingPage/loadingPage';

function App() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} 
        />
      </Routes>
    </BrowserRouter>
      {/*<div id='map-container'ref={mapContainerRef}/>*/}
    </>
  )
}

export default App