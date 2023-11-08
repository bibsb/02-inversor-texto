import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Texto a convertir');
  const [tempTitle, setTempTitle] = useState('');

  return (
    <>
      <h1>{title}</h1>
      <input
        type="text"
        value={tempTitle}
        onChange={(e) => setTempTitle(e.target.value)}
      />
      <button onClick={() => {setTitle(tempTitle
        .split('')
        .reverse()
        .join(''));
        setTempTitle('');
        }}>
        Convertit
      </button>
      {/* split para separar string en array, le doy la vuelta con reverse y uno con join en string de nuevo */}
    
    </>
  );
}

export default App;
