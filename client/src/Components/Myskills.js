import './Myskills.css'
import { useSelector } from 'react-redux';
function Myskills(){
    const itemSec = useSelector(state => state.items.itemSec)
    console.log(itemSec)
    return(
        <div classname='myskills'>
           <div className="top">
            <div className={itemSec? "html" :""}>Html 5</div>
            <div className={itemSec? "html" :""}>Css 3</div>
            <div  className={itemSec? "html" :""}>Scss</div>
           </div>
           <div className="top">
            <div  className={itemSec? "css" :""}>JavaScript</div>
            <div  className={itemSec? "css" :""}>React Js</div>
            <div  className={itemSec? "css" :""}>Node Js</div>
           </div>
           <div className="top">
            <div className={itemSec? "js" :""}>React <br/>Redux</div>
            <div  className={itemSec? "js" :""}>Git</div>
            <div  className={itemSec? "js" :""}>Mongo</div>
           </div>
           
        </div>
    )
}
export default Myskills;