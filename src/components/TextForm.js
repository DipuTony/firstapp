import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("upper Case was clicked");
        setText("You have clicked on Button and HandleUpClik function Run")
    }

    const handleOnChange = () =>{
        console.log("On Change");
    }

    const [text, setText] = useState("Enter Text here");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert Upper Case</button>
        </div>
    )
}
