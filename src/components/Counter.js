import './Counter.css';
import { useContext } from 'react';
import counterContext from '../context/counter-context';

const Counter = () => {
    const ctx = useContext(counterContext);
   return (
      <main className='counter'>
         <h1>Counter</h1>
         <div className="value">{ctx.counter}</div>
         <div>
            <button onClick={ctx.increment}>Increment</button>
            <button onClick={ctx.decrement}>Decrement</button>
         </div>
      </main>
   );
};

export default Counter;
