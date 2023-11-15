import { useState, useEffect } from 'react';


function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efecto')
  }, []);


  return (
    <>
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

export default App
