import React from "react";
export default function Contact(){
    return(
        <div>
            <div className="title">
            <div className="app">
                <h1>ChatApp</h1>
                <img src="" alt="" />
            </div>
            <div className="search">
                <input type="text" placeholder="Chercher" />
            </div>
            </div>
            <div className="Repertoire">
                <img src="" alt="" />
                <label htmlFor="names">Jody</label>
                <img src="" alt="" />
                <label htmlFor="names">Nihal</label>
                <img src="" alt="" />
                <label htmlFor="names">Laila</label>
                <img src="" alt="" />
                <label htmlFor="names">Daniel</label>

            </div>
            <div className="conversation">
                <div className="recepteur">
                    <img src="" alt="" />
                    <label htmlFor="names">Laila</label>  
                </div>
                <div className="chat">
                    <div className="zoneChat">
                      <input type="text" placeholder=" Envoyer un message... " />
                    <button id="env">Envoyer</button>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}