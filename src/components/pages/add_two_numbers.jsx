import React, { useState } from "react";
import "../../app.css";
import descendant from "../../assets/Assets_All-for-one/Bunny.png";
import { addTwoNumbers } from "../Service/Add2SeviceData.js";

const add_two_numbers = () => {

    const [output, setOutput] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const updateOutput = async () => {
        console.log("updateOutput");
        const text = await addTwoNumbers(num1, num2);
        setOutput(text);
    }

    const verifyField = () => {
        if (num1 === "" && num2 === "") {
            return setOutput("Please fill out both fields");
        } else if (num1 === "") {
            return setOutput("Please fill out the first number field");
        } else if (num2 === "") {
            return setOutput("Please fill out the second number field");
        }
        updateOutput();
    }

    return (
        <>
            <div className="header1">
                <div className="header-text">Adding Two Numbers</div>
                <div className="gap"></div>
                <div id="output">{output}</div>
            </div>


            <div className="container">
                <div className="push-down">
                    <input 
                    type="text" 
                    id="num1" 
                    value={num1}
                    onChange={(inputEvent) => setNum1(inputEvent.target.value)}
                    placeholder="enter a number" 
                    />
                    <input 
                    type="text" 
                    id="num2" 
                    value={num2}
                    onChange={(inputEvent) => setNum2(inputEvent.target.value)}
                    placeholder="enter a number"
                    />
                </div>
                <button 
                className="Back-btn" 
                onClick={verifyField}
                id="submitButton"
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

export default add_two_numbers