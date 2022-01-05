import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');
    
    var unaftext;
    var wordCount = text.replace(/\s{2,}/g, ' ').trim().split(" ").filter(n => n).length;

    const handletoUpper = ()=>{
        unaftext = text;
        //console.log(unaftext);
        settext(text.toUpperCase())
        //reset();
        
    }

    const handletoLower = ()=>{
        unaftext = text;
        //console.log(unaftext);
        settext(text.toLowerCase())
        
        
    }

    const handleClear = ()=>{
        unaftext = text;
        //console.log(unaftext);
        settext('')
        let elem = document.getElementById('exampleFormControlTextarea1');        
        elem.value="";
    }

    const handleonChange = (event)=>{
        settext(event.target.value)
        
        
        //console.log(text);
        
    }

  
    const nochange = ()=>{
        //console.log("OnChange!");
        //settext(event.target.value)
    }

 

    


    return (
        <>
            <div className="mb-3 container mt-3">
                <label className="form-label">{props.formInputTitle}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Enter Text Here...' value={unaftext} onChange={handleonChange}></textarea>
                <button className="btn btn-primary mt-3 mx-2" onClick={handletoUpper}>Click to UpperCase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handletoLower}>Click to LowerCase</button>
                <button className="btn btn-success mt-3 mx-2" onClick={handleClear}>Click to Clear</button>
            </div>
            <div className="mb-3 container mt-3">
                <label className="form-label">{props.formOutputTitle}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Result' value={text} onChange={nochange}></textarea>
                <h3>Number of characters: {text.length}</h3>
                <h3>Number of words: {wordCount}</h3>
            </div>
        </>
    )
}

