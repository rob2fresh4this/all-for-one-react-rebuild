import React, { useState } from "react";
import "../../app.css";
import descendant from "../../assets/Assets_All-for-one/Lepic_Portrait.png";

const MagicEightBall = () => {

    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");

    async function eightBall(input) {
        const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/Magic8Ball/shakeBall/${input}`);
        const data = await response.text();
        console.log(data);
        return data;
    }

    const updateOutput = async () => {
        console.log("updateOutput");
        const text = await eightBall(input);
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
                <div className="header-text">Magic 8 Ball</div>
                <div className="gap"></div>
                <div id="output">{output}</div>
            </div>
            <div className="container">
                <input 
                    type="text" 
                    id="input" 
                    placeholder="ask a question" 
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

export default MagicEightBall;