import React from 'react'
import { Link } from 'react-router-dom'
import coloricon from './coloricon.png';
import {dipu} from './TextForm';


export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
{/* <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}> */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className="d-flex">
        <a href="#" className="mx-2"><img onClick={dipu} src={coloricon} width="25px" height="25px"/></a>
        <p className="mx-2 my-1" style={{color: `${props.mode==='light'?'black':'white'}`}} ><strong>{`<=`} Theme | Text {`=>`}</strong></p>
        <div className="bg-danger rounded mx-2" onClick={()=>props.ChnageColor('red')} style={{height: '25px', width: '25px'}}></div>
        <div className="bg-primary rounded mx-2" onClick={()=>props.ChnageColor('blue')} style={{height: '25px', width: '25px'}}></div>
        <div className="bg-light rounded mx-2 border border-primary" onClick={()=>props.ChnageColor('white')} style={{height: '25px', width: '25px'}}></div>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toogelMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}
