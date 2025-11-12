import { useState } from 'react';
import CountNumber from './CountNumber';

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    function incre10(){
        setCount(count+10);
    }

    function decre10(){
        setCount(count-10);
    }

    function reset(){
        setCount(0);
    }
 
 return (
    <div>
        <div>
            <CountNumber count={count} />
            <button onClick={decre10}>-10</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+1</button>
            <button onClick={incre10}>+10</button>
        </div>
    </div>
 )
}

export default Counter;