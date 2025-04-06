import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <div className='row  mt-5 contact' style={{minHeight:"60vh", boxShadow:"0px 10px 10px 10px black"}}>
              <div className='col-sm-4 con' style={{paddingTop:"12%", fontFamily:"cursive", color:"gray"}}>
                
              </div>
              <div className='col-sm-8' style={{padding:"5%"}}>
                <div style={{marginBottom:"2%"}}>
                  <input type='text' id='input' placeholder='Name' className='form-control' />
                </div>
                <div style={{marginBottom:"2%"}}>
                  <input type='email' id='input' placeholder='Email Id' className='form-control' />
                </div>
                <div style={{marginBottom:"2%"}}>
                  <input type='number' id='input' placeholder='Phone' className='form-control' />
                </div>
                <div style={{marginBottom:"2%"}}>
                  <textarea rows={5} className='form-control' style={{background:"none",fontFamily:"cursive",color:"white",borderRadius:"0%"}}>
                    Address Here..
                  </textarea>
                </div>
                <div>
                  <button className='btn btn-success form-control' style={{fontFamily:"cursive"}} >Enquiry Now</button>
                </div>
              </div>
              
            </div>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
