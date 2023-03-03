import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




export default function SearchFunction () {
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    
    const handleClick = () => {
        const input = document.getElementById("input");
        setText(input.value);
        setIsLoading(true);
        fetch(`https://cors-anywhere.herokuapp.com/https://api.mojang.com/users/profiles/minecraft/${input.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Username ${text} not found`);
            }
            return response.json();
        })
        .then(data => {
            setUserId(data.id);
            setUsername(data.name);
        })
        .catch(error => {
            setError(`Username ${input.value} not found.`)
            setUserId(null);
            setUsername(null);
        })
        .finally(() => setIsLoading(false));
        
        

        // Simulate loading data for 1 second
    
    };  
    return (
        <div className="container mt-4">
            <div className="box">
                <div className="row" >
                    <div className=" col-md-6 infobg bg">
                        <h1>Minecraft Account History</h1>
                        <div id="inputs">
                            
                                <input type="text" id="input" placeholder="Minecraft Username"></input>
                                <button  onClick={handleClick}>Search</button>
                            
                        </div>
                    </div>
                    <div className="col-md-6 info" id="history">
                        {isLoading && <h1>Loading...</h1>}
                        {!isLoading && error && <h1><span className="warning">{error}</span></h1>}
                        {!isLoading && userId && (
                        <>
                        <h1>Username: <b>{username}</b></h1>
                        <h1>User ID: <b>{userId}</b></h1>
                        <code><span className='warning'>As of September 13th 2022, Mojang have removed public access to Minecraft’s Username History API endpoint to improve the player experience.</span></code>
                        </> 
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
