import React, { useState } from 'react'

function RequestCallBack() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
  


    const handleSubmit=async(e)=>{
        e.preventDefault();
    
      try {
        const response = await fetch('http://localhost:8080/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone }),
        });
    
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }



  return (
  <div>
        <button className="request-call-back-btn"   data-bs-toggle="modal" data-bs-target="#exampleModal">Request a Call Back</button>


 <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form  onSubmit={handleSubmit}>

   <div className="modal-dialog">
     <div className="modal-content">
       <div className="modal-header ">
         <h5 className="modal-title " id="exampleModalLabel">Request a callback</h5>
         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       </div>
       <div className="modal-body">
      <div className=" ">
 <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Enter Name" aria-label="Username" />
 <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" className="form-control" placeholder="Enter Number" aria-label="Server" />
</div>


       </div>
       <div className="modal-footer">
         <button type="submit" className="btn btn-primary">Request a  callback</button>
       </div>
     </div>
   </div>
   </form>

 </div>

{/* model 2 */}
{/* 
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
     <div className="modal-content">
     
       <div className="modal-body">
         <img src={correct} alt="logo" />
         <h4>Request a call back</h4>
         <h6>Our Team will call you shortly in <br/>
12-24 hrs</h6>
<h6>Can’t you wait for call?</h6>
      


       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-primary">checking another videos 👉 </button>
       </div>
     </div>
   </div>
 </div> */}
  </div> 

  )
}

export default RequestCallBack