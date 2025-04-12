import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { FaCloudDownloadAlt } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'  style={{marginTop:"10%"}}>
            <div className='col-sm-1'></div>
            <div className='col-sm-10 ' style={{textAlign:"center"}}>
              <div>
                <motion.h1 
                initial={{x:-1000, opacity:0,scale:0}}
                animate={{x:0}}
                transition={{
                  duration:2,

                }}
                whileInView={{opacity:1, scale:1}}
                style={{color:"white",fontFamily:"cursive"}}><u>About Me</u></motion.h1>
              </div>
                <div>
                  <motion.h5 
                  initial={{opacity:0,scale:0}}
                  whileInView={{opacity:1, scale:1}}
                  transition={{
                    duration:2,
                  }}
                  style={{textAlign:"justify",color:"grey",marginTop:"5%",marginBottom:"3%"}}>Welcome To my Portfolio.I'm Shashikant Chaurasia , a skilled and Creative full Stack Web Developer
                      with a passion for creating beautiful,responsive and User friendly websites. I have Skills like
                      Html, CSS, JavaScript,React.js, Bootstrap 5, Tailwind CSS. I completed my various website using MERN Stack Technology.</motion.h5>
                </div>
                <div>
                  <div>
                    <button className='btn btn-info'> <Link to="https://drive.google.com/file/d/157LsFQ3YpdWt3wNZ1SGUKLMUnKOpRfQs/view?usp=drivesdk" 
                    style={{textDecoration:"none",color:"white"}}> Download Resume <FaCloudDownloadAlt />
                    </Link></button>
                  </div>
                </div>
            </div>
            <div className='col-sm-1'></div>
        </div>
      </div>
    </div>
  )
}

export default About
