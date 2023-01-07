import React from 'react'
import './Intro.css';
import  Github from '../../img/github.png';
import  LinkedIn from '../../img/linkedin.png';
import  Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import krishna2 from '../../img/krishna2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import {useContext } from "react";


const  Intro =()=> {
     



    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span   style={{
                 color:darkMode?'white':''
                }}>Hy! I Am</span>
                <span> Krishna Poudel</span>
                <span>
                     FrontENd Developer with high level of experinece in web 
                     designing and development, producting the quality work
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/krishna1poudel"> <img src={require('../../img/github.png')} alt="logo" /></a>
                <a href="#"> <img src={require('../../img/linkedin.png')} alt="logo" /></a>
               <a href="https://www.instagram.com/kr.ishna7862/?fbclid=IwAR2Kd-PSuG6P4LhMmozx5R-WhivVunnnn3ASEjhVm6ZmJd-pmMi1qxkyF2g"> <img src={require('../../img/instagram.png')} alt="logo" /></a>
               
            </div>
        </div>
        <div className="i-right">
               <img src={Vector1} alt="" />
               <img src={vector2} alt="" />
               <img src={krishna2} alt="" />
              <img src={glassesimoji} alt="" />
               <div style={{top:'-4%', left:'68%'}}>
                   <FloatingDiv image={Crown} txt1={'web'}  txt2={'developer'}/>
               </div>
               <div  style={{top:'18rem', left:'0rem'}} >
               <FloatingDiv image={thumbup} txt1={'Best Design'}  txt2={' Award'}/>
               </div>
             <div className='blur' style={{background:"rgb(238 210 255)"}}>
             </div>
             <div className='blur' style={
                {
                    background:'#c1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'

                }}></div>
        </div>
    </div>
  
)
  }

export default Intro