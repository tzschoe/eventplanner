import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    function handleReset() {
        setCount(0);
    }
    console.log(count);

    return (
        <>
        <p>Zähler: {count}</p>
        <button onClick={handleIncrement}>
            +1
        </button>
        <button onClick={handleDecrement}>
            -1
        </button>        
        <button onClick={handleReset}>
            Reset
        </button>         
        </>
    );
}

export default Counter;

