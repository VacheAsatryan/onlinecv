import React, { useState } from "react";
import './App.css';
import './Cv.css';
import Modal from "./Modal";
import Abouth from "./Components/Abouth";
import Educations from "./Components/Educations";
import Experience from "./Components/Experience";
import Myskills from "./Components/Myskills";
import Languages from "./Components/Languages";
function Cv() {
  const [modalAbouth, setModalAbouth] = useState(false)
  const [modalEducations, setModalEducations] = useState(false)
  const [modalExperience, setModalExperience] =useState(false)
  const [modalMySkills,setModalMySkills] =useState(false)
  const [modalLanguages, setModalLanguages] =useState(false)
  const [modalContact,setModalContact] = useState(false)

  function showAbout() {
    setModalEducations(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalAbouth(true)
  }
 
  function showEducations() {
    setModalAbouth(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalEducations(true)
  }
   function showExperience(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalExperience(true)
  }
  function showMySkills(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalExperience(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalMySkills(true)
  }
  function showLanguages(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalContact(false)
    setModalLanguages(true)
  }
  function showContact(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(true)
  }
  return (

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
          <button onClick={showAbout}>About Me</button>
          <button onClick={showEducations} >Educations</button>
          <button onClick={showExperience}>Experience</button>
          <button onClick={showMySkills}>My skills</button>
          <button onClick={showLanguages}>Languages</button>
          <button onClick={showContact}>contact</button>
        </div>
        <div className="show">
          <Modal active={modalAbouth} setactive={setModalAbouth}>
      <Abouth/>
          </Modal>
          <Modal active={modalEducations} setactive={setModalEducations}>
       <Educations/>     
          </Modal>
          <Modal active={modalExperience} setactive={setModalExperience}>
            <Experience/>
          </Modal>
          <Modal active={modalMySkills} setactive={setModalMySkills}>
            <Myskills/>
          </Modal>
          <Modal active={modalLanguages} setactive={setModalLanguages}>
            <Languages/>
          </Modal>
          <Modal active={modalContact} setactive={setModalContact}>modal 6</Modal>

        </div>
      </div>

      <div className="foother">
        <input type='text' placeholder='recomendet' />
        <button className="sendButton">send</button>
      </div>

    </div>
  )
}

export default Cv;