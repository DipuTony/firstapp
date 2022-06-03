import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary">Convert Upper Case</button>
        </div>
    )
}
