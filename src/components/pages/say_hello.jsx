import React, { useState } from "react";// useState is a Hook that lets you add React state to function components
import "../../app.css";// imports the .css file
import Valby from '../../assets/Assets_All-for-one/Valby.png';// imports the image file not to important
import { sayHello } from "../Service/HelloDataServices.js";// imports the sayHello function from the SayHelloService file

const SayHello = () => {

    const [helloText, setHelloText] = useState("");// used a useState to update the helloText
    const [userName, setName] = useState("");// used a useState to get the value of the input field and pass it to the sayHello text

    const updateHelloText = async () => {// updates the helloText with the name
        console.log("updateHelloText");// to verify that the function is running
        const text = await sayHello(userName);// awaits the name and sends it to the sayHello function
        setHelloText(text);// then sets the helloText to the name
    }

    const verifyFeild = () => {// very important function that checks if the input field is empty 
        console.log("verifyField pending...");// to verify that the function is running
        if (userName === "") {
            console.log("verifyField failed, name is empty");
            return setHelloText("Please fill out the name field");
        } else {
            console.log("verifyField complete");
            updateHelloText();
        }
    }

    const handleKeyDown = (e) => {// very important function that checks if the enter key is pressed 
        if (e.key === 'Enter') {//if it is pressed it calls the verifyField function
            verifyFeild();
        }
    }

    return (
        <>
            <div>
                <header className="header1">
                    <div className="header-text">Say Hello</div>
                    <div className="gap"></div>
                    <div id="helloText">{helloText}</div>
                </header>
            </div>
            <div className="container">
                <input
                    type="text"
                    id="NameInput"
                    placeholder="enter your name"
                    value={userName}// to get the value of the input field
                    onChange={(inputEvent) => setName(inputEvent.target.value)}// gets the value of the input field and sends it to the setName function
                    onKeyDown={handleKeyDown}// calls the handleKeyDown function when a key is pressed
                />
            </div>
            <footer>
                <div className="back-btn-box">
                    <a href="/"><button className="Back-btn">Back</button></a>
                </div>
                <img src={Valby} alt="descendant" />
            </footer>
        </>
    )
}

export default SayHello;
{/* <img src={valby} alt="descendant" /> */ }