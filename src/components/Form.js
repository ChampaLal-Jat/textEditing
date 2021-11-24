import React, {useState} from 'react'

export default function Form(props) {

    const handleUpClick=()=>{
        // console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }

    const handleLowerClick=()=>{
        // console.log("UpperCase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick=()=>{
        // console.log("UpperCase was clicked");
        let newText='';
        setText(newText);
        props.showAlert("Text has been clear","success");

    }

    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Whole text has been copy","success");

    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removing extra spaces","success");
    }

    
    const [text,setText] = useState('');

    
    // text="Hello"; Wrong way to change the state
    // setText("new text"); 
    return (
        <>
        <div className="container">
            <div className={`container text-${props.mode==='dark'?'white':'dark'}`} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} >
                <h1>{props.heading}</h1>
                <textarea className={`form-control  text-${props.mode==='dark'?'white':'dark'}`} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="10" col="10"></textarea>
            </div>

            <button className="btn btn-primary my-4 mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-success my-4 mx-3" onClick={handleLowerClick}>Convert to Lower Case</button>
            <button className="btn btn-secondary my-4 mx-3" onClick={handleClearClick}>To Clear Text</button>
            <button className="btn btn-warning my-4 mx-3" onClick={handleCopy}>Copy</button>
            <button className="btn btn-danger my-4 mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
            
        <div className={`container my-4 text-${props.mode==='dark'?'white':'dark'}`}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} character</p>
            <p>required {0.008*text.split(' ').length} min to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>    
        </>
    )
}
