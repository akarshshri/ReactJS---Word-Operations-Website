import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');
    
    var unaftext, copiedtext;
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
        elem = document.getElementById('exampleFormControlTextarea2');  
        elem.value="";
    }

    const handleExSpaces = ()=>{
        unaftext = text;
        //console.log(unaftext);
        settext(text.replace(/\s+/g,' ').trim());
    }

    const handleonChange = (event)=>{
        settext(event.target.value)
        
        
        //console.log(text);
        
    }

    const handleCopy = ()=>{
        //copiedtext = document.getElementById('exampleFormControlTextarea1');
        copiedtext = document.getElementById('exampleFormControlTextarea2');
        copiedtext = copiedtext.select();
        document.execCommand('copy');
        props.showAlert('Copied Successfully!','success');
        
        //console.log(props.alert);
        
    }
    
  
    const nochange = ()=>{
        //console.log("OnChange!");
        //settext(event.target.value)
    }


    return (
        <>
        <div className={`bg-${props.mode==='dark'?'grey':'light'}`}>
            <div className="mb-3 container pt-2 ">
                <label className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.formInputTitle}</label>
                <textarea className="form-control"  rows="8" placeholder='Enter Text Here...' value={unaftext} onChange={handleonChange} id="exampleFormControlTextarea1"></textarea>
                <button className="btn btn-primary mt-3 mx-2" onClick={handletoUpper}>Click to UpperCase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handletoLower}>Click to LowerCase</button>
                <button className="btn btn-primary mt-3 mx-2" onClick={handleExSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-success mt-3 mx-2" onClick={handleCopy}>Click to Copy</button>
                <button className="btn btn-danger mt-3 mx-2" onClick={handleClear}>Click to Clear</button>
            </div>
            <div className="mb-3 container mt-3  ">
                <label className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.formOutputTitle}</label>
                <textarea className="form-control copy1" id="exampleFormControlTextarea2" rows="8" placeholder='Result' value={text} onChange={nochange}></textarea>
                <h3 className={`form-label text-${props.mode==='light'?'dark':'light'} py-2`}>Number of characters: {text.length}</h3>
                <h3 className={`form-label py-2 text-${props.mode==='light'?'dark':'light'}`}>Number of words: {wordCount}</h3>
            </div>
        </div>
        </>
    )
}

