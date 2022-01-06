import React from 'react'
export default function Alert(props) {
    //console.log(props.alert);
    return (

        props.alert && 
        <div className='d-flex justify-content-center align-items-center'>
            <div className='align-items-center' style={{position: 'absolute'}}>
                <div className="alert alert-success alert-dismissible fade show " role="alert">
                    {props.alert.msg}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            </div>
        </div>
    )
}
