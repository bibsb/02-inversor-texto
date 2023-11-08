import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Texto a convertir');
  const [tempTitle, setTempTitle] = useState('');
  const [color, setColor] = useState('black');

  return (
    <>
      <div>
        <h1 style={{color:color}}>{title}</h1>
        <input
          type="text"
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
        />
        <button
          onClick={() => {
            setTitle(tempTitle.split('').reverse().join(''));
            {
              /* split para separar string en array, le doy la vuelta con reverse y uno con join en string de nuevo */
            }
            setTempTitle('');
          }}
        >
          Convertit
        </button>
      </div>
      <div>
        <button onClick={() => setColor('black')}>Negro</button>
        <button onClick={() => setColor('red')}>Rojo</button>
        <button onClick={() => setColor('blue')}>Azul</button>
      </div>
    </>
  );
}

export default App;
