import React, { useState, useEffect } from 'react';
function localCounter() {
    const counter = Number(localStorage.getItem("counter"));
    if (counter) {
        return counter;
    }
    else {
        return 0;
    }
}
function App() {
    const [counter, setCounter] = useState(localCounter());
    function colorCounter() {
        if (counter === 0) {
            return { color: "#fff" }
        }
        else if (counter > 0) {
            return { color: "#24ff24" }
        }
        else {
            return { color: "#ff3a3a" }
        }
    }
    function decrementCounter() {
        setCounter(counter - 1);
    }
    function resetCounter() {
        setCounter(0);
    }
    function incrementCounter() {
        setCounter(counter + 1);
    }
    useEffect(() => {
        localStorage.setItem("counter", counter);
    }, [counter])
    return (
        <section className="container">
            <div className="title">
                <h1>Counter</h1>
            </div>
            <div className="counter">
                <p style={colorCounter()}>{counter.toLocaleString()}</p>
            </div>
            <div className="btn">
                <button onClick={decrementCounter}>Decrement</button>
                <button onClick={resetCounter}>Reset</button>
                <button onClick={incrementCounter}>Increment</button>
            </div>
        </section>
    )
}
export default App;