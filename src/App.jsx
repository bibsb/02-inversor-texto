import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('Texto a convertir');
    
  return (
    <>
        <h1>{title}</h1>
        <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value.split('').reverse().join(''))}/>
        {/* split para separar string en array, le doy la vuelta con reverse y uno con join en string de nuevo */}
    </>
  )
}

export default App
