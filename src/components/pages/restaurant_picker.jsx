import React, { useState } from "react";
import descendant from "../../assets/Assets_All-for-one/Viessa.png";
import { getRestaurant } from "../Service/PickerDataServices.js";

const restaurantPicker = () => {

    const [output, setOutput] = useState("");

    const mexican = async () => {
        console.log("mexican");
        const text = await getRestaurant("mexican");
        setOutput(text);
    }


    const chinese = async () => {
        console.log("chinese");
        const text = await getRestaurant("chinese");
        setOutput(text);
    }

    const japanese = async () => {
        console.log("japanese");
        const text = await getRestaurant("japanese");
        setOutput(text);
    }


    return (
        <>


            <div className="header1">
                <div className="header-text">Restaurant Picker</div>
                <div className="gap"></div>
                <div id="output">{output}</div>
            </div>
            <div className="container">
                <div className="row">
                    <button className="Back-btn" onClick={mexican} id="mexican">Mexican</button>
                    <button className="Back-btn" onClick={chinese} id="chinese">Chinese</button>
                    <button className="Back-btn" onClick={japanese} id="japanese">Japanese</button>
                </div>
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

export default restaurantPicker;