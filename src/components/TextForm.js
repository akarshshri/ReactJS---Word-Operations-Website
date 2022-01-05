import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');
    var unaftext;

    const handletoUpper = ()=>{
        unaftext = text;
        //console.log(unaftext);
        settext(text.toUpperCase())
        //reset();
    }

    const handleonChange = (event)=>{
        //console.log("OnChange!");
        settext(event.target.value)
        
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
                <button className="btn btn-primary mt-3" onClick={handletoUpper}>Click to UpperCase</button>
            </div>
            <div className="mb-3 container mt-3">
                <label className="form-label">{props.formOutputTitle}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Result' value={text} onChange={nochange}></textarea>
                
            </div>
        </>
    )
}
