import React from 'react'

export default function Alert(props) {
    const captilized = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{captilized(props.alert.type)}!</strong> {props.alert.msg}
    </div>
  )
}


//props.alert && Hello Dipu (if "props.alert" than go to hello Dipu else hello dipu not execute)