import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');

    const handletoUpper = ()=>{
        //console.log(text);
        settext(text.toUpperCase())
    }

    const handleonChange = (event)=>{
        //console.log("OnChange!");
        settext(event.target.value)
    }

    return (
        <>
            <div className="mb-3 container mt-3">
                <label className="form-label">{props.formTitle}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Enter Text Here...' value={text} onChange={handleonChange}></textarea>
                <button className="btn btn-primary mt-3" onClick={handletoUpper}>Click to UpperCase</button>
            </div>
        </>
    )
}
