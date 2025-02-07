import React, { useState } from "react";
import "../../app.css";
import descendant from "../../assets/Assets_All-for-one/Sharen.png";

const GreaterOrLess = () => {
    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");

    async function geaterOrLess(input, input2) {
        const response = await fetch(`https://minichallengetwotofour-endpoints.azurewebsites.net/LessThenGreaterThen/lessThenGreaterThen/${input}/${input2}`);
        const data = await response.text();
        console.log(data);
        return data;
    }

    const updateOutput = async () => {
        console.log("updateOutput");
        const text = await geaterOrLess(input, input2);
        setOutput(text);
    }

    const verifyField = () => {
        if (input === "" && input2 === "") {
            return setOutput("Please fill out both fields");
        } else if (input === "") {
            return setOutput("Please fill out the first number field");
        } else if (input2 === "") {
            return setOutput("Please fill out the second number field");
        }
        updateOutput();
    }

    return(
        <>
            <div className="header1">
                <div className="header-text">Greater or Less</div>
                <div className="gap"></div>
                <div id="output">{output}</div>
            </div>

            <div className="container">
                <div className="push-down">
                    <input 
                        type="text" 
                        id="input" 
                        placeholder="enter a number" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        id="input2" 
                        placeholder="enter a number" 
                        value={input2} 
                        onChange={(e) => setInput2(e.target.value)} 
                    />
                </div>
                <button className="Back-btn" id="submit" onClick={verifyField}>Submit</button>
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

export default GreaterOrLess;