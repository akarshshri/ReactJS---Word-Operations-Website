import React, { useState } from 'react'

export default function About() {
    

    const [theme, settheme] = useState({
        backgroundColor: 'white',
        color: 'black'
    })

    const [btnText, setbtnText] = useState('Enable Dark Mode')

    const themeToggle = ()=>{
        if (theme.backgroundColor === 'white'){
           settheme({
                backgroundColor: 'black',
                color: 'white'
           })
           setbtnText('Enable Light Mode')
        }else{
            settheme({
                backgroundColor: 'white',
                color: 'black'
           })
           setbtnText('Enable Dark Mode')
           
        }
    }
    return (
        <div className='container mt-4'>
            <form className="row g-3 " style={theme}>
                <div className="col-md-6">
                    <label forhtml="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label forhtml="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label forhtml="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label forhtml="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label forhtml="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label forhtml="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option >Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label forhtml="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" forhtml="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div className="col-12 py-3">
                    <button type="button" className="btn btn-primary" onClick={themeToggle}>{btnText}</button>
                </div>
            </form>
        </div>
    )
}
