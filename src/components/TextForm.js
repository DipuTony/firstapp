import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const ConvertLower = () =>{
        // console.log("upper Case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={ConvertLower}>Lower Case</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length.toFixed(2)} Minutes to Raed This</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
