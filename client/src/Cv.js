import React, { useState } from "react";
import './App.css';
import './Cv.css';
import Modal from "./Modal";
function Cv(){
  const [modalactive,setmodalactive] =useState(false)
  const [mode,setmode] =useState(false)
function showAbout(){
  setmodalactive(true)
}
function showeducations(){
  setmodalactive(false)
  setmode(true)
}
return(
    
  <div className="info" >
    <div className="header">
      <div className="avatar">
        
      </div>
  <div className="userName">
  <h1>Vache Asatryan</h1>
  <h3>front end developer</h3>
  </div>
    </div>
    <div className="body">
      <div className="menu">
        <button onClick={showAbout} >About Me</button>
        <button onclick ={showeducations}>Educations</button>
        <button>Experience</button>
        <button>My skills</button>
        <button>Languages</button>
        <button>contact</button>
        </div>
        <div className="show">
   <Modal active={modalactive} setactive={setmodalactive}>
    <div className="any">
      

    </div>
   </Modal>
    <Modal active={mode} setactive={setmode}>edededededededede</Modal>
      </div>
    </div>
   
    <div className="foother">
    <input type='text' placeholder='recomendet'/>
    <button>send</button>
    </div>

  </div>
)
}

export default Cv;