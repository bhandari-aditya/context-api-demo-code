import { useState } from 'react';
import Counter from './components/Counter';
import counterContext from './context/counter-context';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
     setCounter(counter - 1);
  }
  
   return (
      <counterContext.Provider value={{
        counter,
        increment,
        decrement
    }}>
         <div className='App'>
            <Counter />
         </div>
      </counterContext.Provider>
   );
}

export default App;
