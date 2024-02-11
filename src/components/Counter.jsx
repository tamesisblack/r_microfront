import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(5);
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;