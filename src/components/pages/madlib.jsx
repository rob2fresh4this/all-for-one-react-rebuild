import React, { useState } from "react";
import descendant from "../../assets/Assets_All-for-one/Sharen.png";
import { generateMadLib } from "../Service/MadlibDataSevices.js";

// left notes so i can remember what each part of the code does
const MadLib = () => {
    const [output, setOutput] = useState('');// declearing the state variable output and setOutput
    const [inputs, setInputs] = useState({
        animal: "",
        container1: "",
        leastFavColor: "",
        bodyCovering: "",
        verb1: "",
        favoriteThing: "",
        favoriteFood: "",
        activityToDo: "",
        changeAppearance: "",
        favColor: "",
    });

    const handleChange = (inputEvent) => {// to handle the change in the input and the value
        setInputs({ ...inputs, [inputEvent.target.id]: inputEvent.target.value });
    };

    const verify = async () => {
        if (Object.values(inputs).some(value => value === "")) {// to check if the input is empty
            setOutput("Please fill out all fields.");
            return;
        }

        const result = await generateMadLib(inputs);
        setOutput(result);
    };

    return (
        <>
            <div className="header3">
                <h1 className="header-text">MadLib</h1>
            </div>

            <div className="container">
                <div className="inputs-container">
                    {Object.keys(inputs).map((key) => (// created a object then .key to get the key value from inputs and then .map to iterate through the object after gave it a parameter:'key' to get the key value then created a layout for the input field and gave it a key value to send towards the 'const inputs, setInputs' function
                        <input
                            key={key}
                            id={key}
                            type="text"
                            placeholder={`Type a ${key} out...`}
                            value={inputs[key]}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <button id="startButton" className="Back-btn" onClick={verify}>
                    Start
                </button>

                <div className="madlib-container">
                    <div className="madlib-text" id="output">{output}</div>
                </div>
                <div className="restartBtn"></div>
            </div>

            <footer className="footer-madlib">
                <div className="back-btn-box">
                    <a href="/"><button className="Back-btn">Back</button></a>
                </div>
                <img src={descendant} alt="descendant" />
            </footer>
        </>
    );
};

export default MadLib;
