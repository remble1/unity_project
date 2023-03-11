// A express server, which will handle api request coming in and respond back with a json object, it will use body parser as well as corse
import React, { useState } from "react";
import './App.css';
import Home from "./Components/Home";

function App() {
    const [message, setMessage] = useState('');
    const [price, setPrice] = useState('');
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        const result = e.target.value.replace(/\D/g, '');

        setPrice(result);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, price }),
        })
        .then((res) => res.json())
        .then((data) => setResponse(data.message));
    };

    return(

        <div className="App">
        <div>
            <Home/>    
        </div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <input
                    type="text"
                    placeholder="Max price"
                    value={price}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>            
            </form>
            <div>{response}</div>
        </div>
    );
}

export default App 