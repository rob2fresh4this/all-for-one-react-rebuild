import React, { useState } from "react";
import descendant from "../../assets/Assets_All-for-one/Hailey.png";
import { ReverseItNum } from "../Service/RNumDataSevices";

const ReverseNumbers = () => {
    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");

    const updateOutput = async () => {
        console.log("updateOutput");
        const text = await ReverseItNum(input);
        setOutput(text);
    }

    const verifyField = () => {
        if (input === "") {
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
                <div className="header-text">Reverse It Numbers</div>
                <div className="gap"></div>
                <div id="output">{output}</div>
            </div>

            <div className="container">
                <input 
                    type="text" 
                    id="input" 
                    placeholder="enter something" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
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

export default ReverseNumbers;