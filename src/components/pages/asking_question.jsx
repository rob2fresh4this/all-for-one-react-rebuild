import React, { useState } from "react";
import descendant from "../../assets/Assets_All-for-one/Ajax.png";
import { askQuestion } from "../Service/QuestionServiceData.js";

const asking_question = () => {
    const [output, setOutput] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");

    const updateOutput = async () => {
        console.log("updateOutput");
        const text = await askQuestion(name, time);
        setOutput(text);
    }

    const verifyField = () => {
        if (name === "" && time === "") {
            return setOutput("Please fill out both fields");
        } else if (name === "") {
            return setOutput("Please fill out the name field");
        } else if (time === "") {
            return setOutput("Please fill out the time field");
        }
        updateOutput();
    }
    
    return(
        <>
        <div className="header1">
        <div className="header-text">Asking Questions</div>
        <div className="gap"></div>
        <div id="output">{output}</div>
    </div>
    <div className="container">
        <div className="push-down">
            <input 
            type="text" 
            id="NameInput" 
            value={name}  
            onChange={(inputEvent) => setName(inputEvent.target.value)}
            placeholder="enter your name" 
            />
            <input 
            type="text" 
            id="TimeInput" 
            value={time}
            onChange={(inputEvent) => setTime(inputEvent.target.value)}
            placeholder="enter a time" />
        </div>

        <button 
        className="Back-btn" 
        id="submitButton"
        onClick={verifyField}
        >submit</button>
    </div>

    <footer>
        <div className="back-btn-box">
            <a href="/"><button className="Back-btn">Back</button></a>
        </div>
        <img src={descendant} alt="descendant" />
    </footer>
        </>
    )
}

export default asking_question;