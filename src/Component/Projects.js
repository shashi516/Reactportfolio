
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {

    const projectArray=[
        {
        topic: "Hospital management Sytem",
        imageUrl: "/proj/HSM.png" 
        },
        {
            topic: "A Matrimony Website",
            imageUrl: "/proj/Matri.png" 
        },
        {
            topic: "Chetu-Clone only Frontend",
            imageUrl: "/proj/Chetu.png" 
        },

    ];
    const responsive = {
        extraLarge: {
          breakpoint: { max: 3000, min: 1324 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        large: {
          breakpoint: { max: 1324, min: 1005 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        medium: {
          breakpoint: { max: 1005, min: 700 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        small: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

  return (

    <div>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10 mt-5'>
            <Carousel  responsive={responsive} removeArrowOnDeviceType={["tablet",""]}>
{projectArray.map((project, index) => {
            return (
              <div key={index} className="card">
                <img src={project.imageUrl} alt="Department"  id='project-image' />
                <div>
                <div className="project-topic">{project.topic}</div>
                <div style={{textAlign:"end"}}>
                <button className='btn btn-basic' style={{color:"gray"}}><u>See Demo</u></button>

                </div>
                </div>
              </div>
            );
          })}
  
</Carousel>
            </div>
            <div className='col-sm-1'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
