import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from  "../../img/Facebook.png"
import { themeContext } from '../../Context';
import {useContext } from "react";

function Works() {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode;
  return (
     
       <div className="works">
           
      <div className="awesome">
        <span style={{
                 color:darkMode?'white':''
                }}>Works for All these</span>
        <span>Brands & Clents</span>
        <span>
             webpage designing (full stack developer ).
             <br/>
             UI design with simplex to complex terotype designing
             3D modeling using Autodesk maya .
             <br />
             Advance knowledge in Adobe illustrator and moderate in photoshop
            <br />
        </span>
        <button className="button s-button">Hire me</button>
         <div className="blur s-blur1" style={{ background: "var(--purple)"  }}>
         </div>
         </div>
         {/* rigthside */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" /> 
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" /> 
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" /> 
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" /> 
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" /> 
                    </div>
                </div>
                {/* BackgroundCircle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
     
      
       </div>
      
  )
}

export default Works