
import { useState } from 'react';

import './App.css';
import { Provider } from './context/Kontekst';
import Komponenta1 from './components/Komponenta1';

function App() {

  const [number, setNumber] = useState(0);

  function textChangeHandler(event){
    setNumber(event.target.value);
  }

  return (
    <div className="App">
      <Provider value={{ text: "Komponenta 4 je najbolja", number: number, reset: (br) => setNumber(br) }}>
        <h1>App Komponenta</h1>
        <label>
          Postavi u kontekst broj:
          <input type="number" value={number} onChange={ textChangeHandler } />
        </label>
        <Komponenta1 />
      </Provider>
    </div>
  );
}

export default App;
