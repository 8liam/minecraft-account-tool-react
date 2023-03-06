import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactSkinview3d from "react-skinview3d"
import { AiOutlineCopy } from "react-icons/ai";


export default function SearchFunction () {
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const [skinBase64, setSkinBase64] = useState("");
    const [skinUrl, setSkinUrl] = useState("");

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
            return fetch(`https://cors-anywhere.herokuapp.com/https://sessionserver.mojang.com/session/minecraft/profile/${data.id}`);
        })
        .then(skinresponse => {
            if (!skinresponse.ok) {
                throw new Error(`Error retreiving skin for ${text}`);
            }
            return skinresponse.json();
        })
        .then(skindata => {
            const base64String = skindata.properties[0].value;
            const jsonString = atob(base64String);
            const jsonObject = JSON.parse(jsonString);
            console.log(jsonObject);
            setSkinBase64(skindata.properties[0].value);
            setSkinUrl(jsonObject.textures.SKIN.url);

        })
        .catch(error => {
            setError(`Username ${input.value} not found.`)
            setUserId(null);
            setUsername(null);
            setSkinBase64(null);
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
                        <div className="bordered-box-rounded">
                        <h1>{username}</h1>
                        <ReactSkinview3d
                            className="viewer"
                            skinUrl={skinUrl}
                            height={200}
                            width={100}
                            onReady={({ viewer }) => {
                              // Add an animation
                              // Enabled auto rotate
                                viewer.autoRotate = false;
                            }}
                            />
                            <hr></hr>
                        <code>{userId} <AiOutlineCopy style={{cursor: 'pointer'}}onClick={() => {navigator.clipboard.writeText(userId)}}/></code>
                    </div>
                        </> 
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
