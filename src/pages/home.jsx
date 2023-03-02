import React from 'react';
import { Link } from 'react-router-dom';


export default function Home () {
    return (
        <div className="container mt-4">
            <div className="box">
                <div className="row" >
                    <div className=" col-md-6 infobg bg">
                        <h1>Minecraft Account History</h1>
                        <div id="inputs">
                            <form>
                                <input name="username" type="text" id="input" placeholder="Minecraft Username"></input>
                                <button id="mcsearch" name="search" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 info" id="history">
                        <h1>History</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
