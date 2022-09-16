import { useState } from 'react';
import './assets/icons/style.css'
import Cv from "./Cv";
import './App.css'
import blueplanet from './video/blueplanet.mp4';



function App(){
  const [show, setShow] = useState(true);

  return(
    <div className='App'>
   
      {
        show?   <div className='v'>
        <div className='Forbutton'>
        <span className='description'>
      This page was created to<br/> demonstrate my sciences,
        React js,<br/> Redox was used to create this<br/> page</span>
        <button onClick={()=>{
          console.log(show)
          setShow(false)
        }} className='but'>click</button>
        </div>
        <video className='vid' src={blueplanet}autoPlay loop muted />
        </div>: <Cv/>


      }
    </div>
  )
}
export default App;





