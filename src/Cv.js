import React, { useState } from "react";
import './Cv.css';
import Modal from "./Modal";
import Abouth from "./Components/Abouth";
import Educations from "./Components/Educations";
import Experience from "./Components/Experience";
import Myskills from "./Components/Myskills";
import Languages from "./Components/Languages";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD,ADDSEC } from "./redux/abouth/abouthSlicer";
import Contact from "./Components/Contact";
import vach5 from "./images/vach5.jpg"

function Cv() {
  const [modalAbouth, setModalAbouth] = useState(false)
  const [modalEducations, setModalEducations] = useState(false)
  const [modalExperience, setModalExperience] =useState(false)
  const [modalMySkills,setModalMySkills] =useState(false)
  const [modalLanguages, setModalLanguages] =useState(false)
  const [modalContact,setModalContact] = useState(false)
  const dispatch = useDispatch();
  const item = useSelector((state) =>{
    return state.items.item
});
const itemSec =useSelector((state)=>{
  return state.items.itemSec
})

  function showAbout() {
    setModalEducations(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalAbouth(true)
    dispatch({
      type:ADD,
      payload:{
        item:true
      }
    })
    dispatch({
      type:ADDSEC,
      payload:{
        itemSec:false
      }
    })
  }
 
  function showEducations() {
    setModalAbouth(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalEducations(true)
    dispatch({
      type:ADD,
      payload:{
        item:false
      }
    })
    dispatch({
      type:ADDSEC,
      payload:{
        itemSec:false
      }
    })
    
  }
   function showExperience(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalExperience(true)
    dispatch({
      type:ADD,
      payload:{
        item:false
      }
    })
    dispatch({
      type:ADDSEC,
      payload:{
        itemSec:false
      }
    })
  }
  function showMySkills(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalExperience(false)
    setModalLanguages(false)
    setModalContact(false)
    setModalMySkills(true)
    dispatch({
      type:ADD,
      payload:{
        item:false
      }
    })
    dispatch({
      type:ADDSEC,
      payload:{
        itemSec:true
      }
    })
  }
  function showLanguages(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalContact(false)
    setModalLanguages(true)
    dispatch({
      type:ADD,
      payload:{
        item:false
      }
    })
    dispatch({
      type:ADDSEC,
      payload:{
        itemSec:false
      }
    })
  }
  function showContact(){
    setModalAbouth(false)
    setModalEducations(false)
    setModalExperience(false)
    setModalMySkills(false)
    setModalLanguages(false)
    setModalContact(true)
    dispatch({
      type:ADD,
      payload:{
        item:false
      }
    })
    dispatch({
      type:ADDSEC,
      payload:{
        itemSec:false
      }
    })
  }
  return (

    <div className="info" >
      <div className="header">
        <div className="avatar">
        <img src={vach5} alt="vacheeeee" className="vache"/>
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
          <Modal active={modalContact} setactive={setModalContact}>
            <Contact/>
          </Modal>

        </div>
      </div>

      <div className="foother">
      
      </div>

    </div>
  )
}

export default Cv;