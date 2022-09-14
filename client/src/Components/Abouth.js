import React from "react";
import './Abouth.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Abouth(){
    const dispatch = useDispatch()
    const item = useSelector((state) =>{
        return state.items.item
    });
    return(
        <div className="AbouthMe">
            <div className={item? 'myName':''}>
               <span> hello my name is Vache Asatryan i leave in Armavir </span>
               
            </div>
            <div  className={item? 'myLearn':''}>
                <span>
                in 2015 i finished school after i entered polytechnic university studied for bachelor <br/>
                where i studied at programmer in the department of computer technology
                </span>
            </div>
            <div className={item? 'aft':''}>
                <span>
                after graduating, I successfully completed a six-month course on learning front-end programming
                </span>
            </div>

        </div>
    )
}
export default Abouth;