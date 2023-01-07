import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from  "../../img/humble.png";
import Cards from '../Cards/Cards';
import Bussiness from './Bussiness.jpg';
import { themeContext } from '../../Context';
import {useContext } from "react";

function Services() {
   const theme=useContext(themeContext)
   const darkMode=theme.state.darkMode;
  return (
     <div className="services" id='Services'>
     {/* leftside */}
      <div className="awesome" >
        <span  style={{
                 color:darkMode?'white':''
                }}>my Awesome</span>
        <span>Services</span>
        <span>
             webpage designing (full stack developer ).
             <br/>
             UI design with simplex to complex terotype designing
             3D modeling using Autodesk maya .
             <br />
             Advance knowledge in Adobe illustrator and moderate in photoshop
            <br />
        </span>
        <a href={Bussiness} download>
        <button className="button s-button">Download card</button>
        </a>
       
         <div className="blur s-blur1" style={{ background: "var(--purple)"  }}></div>
      </div>

      {/* rightsizw */}
      <div className="cards">
                    <div style={{left:'14rem'}}>
                       <Cards
                         emoji={HeartEmoji}
                         heading={"Design"}
                         detail={"Figma,Sketch,photoshop,Adobe xd"}
                    />
                     </div>

                   < div style={{top:"12rem",left:"-4rem"}}>
                      <Cards
                          emoji={Glasses}
                          heading={"Developer"}
                          detail={"Html,Css,Javasript,react"}
                       />
                   
                   </div>

                   < div style={{top:"19rem",left:"12rem"}}>
                      <Cards
                          emoji={Humble}
                          heading={"3D modeling"}
                          detail={"Autodesk Maya ..."}
                       />
                   
                   </div>
          
      </div>
     </div>
   
     
  )
}

export default Services