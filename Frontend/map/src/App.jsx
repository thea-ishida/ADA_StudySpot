import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'

const INITIAL_CENTER = [-81.27848, 43.00467]
const INITIAL_ZOOM = 14.63

function App() {
  const mapRef = useRef(null)
  const mapContainerRef = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGlzaGlkYSIsImEiOiJjbThjOTNibngwYmlhMmpveDlwM3lwZDV4In0.OUdgbiWgjQnpHPjA6EhVUQ'
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM
    })
    mapRef.current = map

    // Clean up on unmount
    return () => {
      map.remove()
    }
  }, [])

  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM
    })
  }

  return (
    <>
      <button className="reset-button" onClick={handleButtonClick}>Reset</button>
      <div id="map-container" ref={mapContainerRef} />
    </>
  )
}

export default App
