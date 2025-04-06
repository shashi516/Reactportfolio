import React from 'react'
import {  useTypewriter,Cursor } from 'react-simple-typewriter'
import profileimg from "../Image/img.png";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bio = () => {

    const [text]= useTypewriter({
        words:["Full Stack Web Developer..","UI Designer.."],
        loop:true,
        Cursor,
        CursorStyle:"",
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
       
    });

  return (
    <div>
        <div className='container-fluid'>
            <div className='row d-flex'>
                <div className='col-sm-7' style={{paddingLeft:"5%",paddingTop:"10%", }} >
                    <div > 
                        <span style={{color:"lightgray", fontFamily:"cursive",textAlign:""}}>WELCOME TO MY WORLD</span><br/>
                        <span id='intro'>Hi,I'm <span style={{color:"tomato"}}>Shashikant Chaurasia </span></span>
                        <h3 style={{color:"white"}}>a <span style={{color:"orange"}}>{text}</span>
                        <Cursor /></h3>
                    </div>
                   <div style={{marginTop:"5%"}}>
                   <div style={{}}>
                        <h4 style={{color:"white", fontFamily:"cursive"}}>FIND ME IN</h4>
                    </div>
                    <div className='d-flex icons mb-5 mt-2'>
                        <div id='iconso' >
                        <Link to="https://www.facebook.com/gopal.chaurasia.3538?mibextid=ZbWKwL"><FaFacebookF/></Link>
                        </div>&nbsp;&nbsp;
                        <div id='iconso' >
                        <Link to="https://www.instagram.com/shashi_21.12?igsh=NGJweWVtZjF0dzY4"><FaSquareInstagram /></Link> 
                        </div>&nbsp;&nbsp;
                        <div id='iconso' >
                        <Link to="https://www.linkedin.com/in/shashikant2112"><ImLinkedin2/></Link>
                        </div>&nbsp;&nbsp;
                        <div id='iconso' >
                        <Link to="https://www.facebook.com/gopal.chaurasia.3538?mibextid=ZbWKwL"><FaGithub/></Link>
                        </div>
                    </div>
                   </div>
                </div>
                <div className='col-sm-5' style={{paddingTop:"10%" ,alignContent:"center"}}>
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{
                        duration:2,
                      }}
                     className='pic'>
                       <img
                       src={profileimg} alt='' id='img' style={{ height:"130%",marginTop:"-40%"}}/>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bio;
