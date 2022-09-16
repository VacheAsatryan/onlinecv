import './Myskills.css'
import { useSelector } from 'react-redux';
function Myskills(){
    const itemSec = useSelector(state => state.items.itemSec)
    console.log(itemSec)
    return(
        <div classname='myskills'>
           <div className="top">
            <div className={itemSec? "html" :""}> <span className='icon-html5'><br/> html 5</span></div>
            <div className={itemSec? "html" :""}> <span className='icon-css3'><br/> css</span></div>
            <div className={itemSec? "html" :""}> <span className='icon-sass'><br/> sass</span></div>
           </div>
           <div className="top">
            <div  className={itemSec? "css" :""}> <span className='icon-javascript'> <br/> java Script</span></div>
            <div  className={itemSec? "css" :""}> <span className='icon-react'> <br/> React js</span></div>
            <div  className={itemSec? "css" :""}> <span className='icon-nodemon'> <br/> Node js</span></div>
           </div>
           <div className="top">
            <div className={itemSec? "js" :""}> <span className='icon-redux'></span> React  <br/>Redux</div>
            <div  className={itemSec? "js" :""}> <span className='icon-github'> </span> Github </div>
            <div  className={itemSec? "js" :""}> <span className='icon-mongodb'></span> Github </div>
           </div>
           
        </div>
    )
}
export default Myskills;