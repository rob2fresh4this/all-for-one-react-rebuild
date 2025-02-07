import React, { useState } from "react";
import "../../app.css";
import descendant from "../../assets/Assets_All-for-one/Freyna.png";
import { isOddOrEven } from "../Service/EvenOddDataServices.js";

const OddOrEven = () => {
    const [output, setOutput] = useState("");
    const [num1, setNum1] = useState("");

    const updateOutput = async () => {
        console.log("updateOutput");
        const text = await isOddOrEven(num1);
        setOutput(text);
    }

    const verifyField = () => {
        if (num1 === "") {
            return setOutput("Please fill out the field");
        }
        updateOutput();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            verifyField();
        }
    }

    return (
        <>
            <div className="header1">
                <div className="header-text">Odd or Even</div>
                <div className="gap"></div>
                <div id="output">{output}</div>
            </div>
            <div className="container">
                <input 
                    type="text" 
                    id="num1" 
                    placeholder="enter a number" 
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
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

export default OddOrEven;