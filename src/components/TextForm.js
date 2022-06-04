import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Text had been Convert Upper case.", "success");
    }
    const ConvertLower = () =>{
        // console.log("upper Case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Text had been Convert Lower.", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleClear = () =>{
        let cnf = window.confirm("Are you sure to Clear");
        if(cnf){ 
           setText(""); 
           props.ShowAlert("Text had been cleared.", "warning");
        }
        
    }
    const handleEmailExtract = () =>{
        let regex = (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        let matches = regex.exec(text);
        if(matches == null){
            setEmailText("Email Not Found");
        }else{
            setEmailText("Found Email - " + matches[0]);
        }
    }
    const handleCopytoClip = () =>{
        navigator.clipboard.writeText(text);
        // setEmailText("Coppied : " + text);
        props.ShowAlert("Text Coppied : -" + text, "success");
    }
    const speak = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const changeTheme = () => {
        let color = '#';
        color += Math.random().toString(16).slice(2,8);
        document.querySelector('body').style.backgroundColor = color;
        props.ShowAlert("Theme Changed | Color Code : " + color, "success");
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.ShowAlert("Extra Space has been removed", "success");
    }
    const [text, setText] = useState("");
    const [textEmail, setEmailText] = useState(""); // Secound State for Email Exctraction
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={ConvertLower}>Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleEmailExtract}>Extract Email</button>
            <button className="btn btn-primary mx-1" onClick={handleCopytoClip}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={changeTheme}>Change Theme</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summery</h2>
            <p> <b>{text.split(" ").filter((element)=>{ return element.length!=0}).length}</b> Words and <b> {text.length}</b> Characters and <b>{0.008 * text.split(" ").length.toFixed(2)}</b> Minutes to Raed This</p>
            <h3>Preview</h3>
            <p>{text}</p>
            <p>{textEmail}</p>
        </div>
        </>
    )
}
