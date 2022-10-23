import React,{useEffect, useState}from 'react'
import axios from "axios";
import { useParams } from "react-router";
import { getSuggestedQuery } from '@testing-library/react';




 const UpdateSup=()=>{

  let {id} = useParams()

  const [supplierId ,setID]=useState('');
  const[companyName ,setCompanyName]=useState('');
  const[address,setAddress]=useState('');
  const[companyPhone,setCompanyPhone]=useState('');
  const[email,setEmail]=useState('');
  const[contactName,setContactName]=useState('');
  const[mobile ,setMobile]=useState('');
  const[type,setType]=useState('');

  const sendDataToUpdate= async()=>{
      try{
        let payload = {
          supplierId,
          companyName,
          address,
          companyPhone,
          email,
          contactName,
          mobile,
          type
        }
    
        const res = await axios.put(`http://localhost:8090/supplier/update/${id}`,payload)
        alert("You have successfully updated.")
        window.location.href="/"
      }catch(e){
          alert(e)
      }
  }


  useEffect(()=>{
    getUserData()
  },[]);

  const getUserData=async()=>{
    const res= (await axios.get(`http://localhost:8090/supplier/get/${id}`)).data.suplier;
    console.log(res);
    setID(res.supplierId);
    setCompanyName(res.companyName);
    setAddress(res.address);
    setCompanyPhone(res.companyPhone);
    setEmail(res.email);
    setContactName(res.contactName);
    setMobile(res.mobile);
    setType(res.type);
  }
    



         return(
          <div id="booking" className="section">
            <div className="section-center">
    <div className="container">
      <div className="row">
        <div className="booking-form">
          <div className="form-header">
          <p>Update Supplier</p>
        <form  onSubmit={sendDataToUpdate}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputID"  className="form-label">Supplier ID</label>
      <input type="text"  value={supplierId  || ""}  name="supierId"  onChange={(e)=>setID(e.target.value)} className="form-control" id="inputID"  placeholder="Enter Supplier ID here" required />
    </div>
    <div className="form-group col-md-6">
      <label for="inputCompanyname"  className="form-label">Company Name</label>
      <input type="text" value={companyName || ""} name= "compaName" onChange={(e)=>setCompanyName(e.target.value)} className="form-control" id="inputCompanyname" placeholder="Enter Company name here"    required/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress"  className="form-label">Address</label>
    <input type="text" value={address || ""} name="adess"  onChange={(e)=>setAddress(e.target.value)} className="form-control" id="inputAddress" placeholder="Enter address here"   required/>
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputphone"  className="form-label">Company phone</label>
      <input type="text" value={companyPhone || ""}  name="compaPhone" onChange={(e)=>setCompanyPhone(e.target.value)} className="form-control" id="inputphone"   placeholder="Enter Company phone number here"  required />
    </div>
    <div className="form-group col-md-6">
      <label for="inputemail" className="form-label">Email</label>
      <input type="email" value={email || ""}  name="emil" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="inputemail"  placeholder="Enter Email here"  required />
    </div>
  </div>

  
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputContactname"  className="form-label">Contact Name</label>
      <input type="text" value={contactName || ""}  name="conttName"  onChange={(e)=>setContactName(e.target.value)}className="form-control" id="inputContactname"  placeholder='Enter name here'  required/>
    </div>
   
    <div className="form-group col-md-2">
      <label for="inputMobile"  className="form-label">Mobile</label>
      <input type="text" value={mobile || ""}  name="mole"  onChange={(e)=>setMobile(e.target.value)}className="form-control" id="inputMobile" placeholder='0778911672'  required/>
    </div>

    <div className="form-group col-md-4">
      <label for="inputType"  className="form-label">Type</label>
      <input type="text" value={type || ""}  name="typ" onChange={(e)=>setType(e.target.value)} className="form-control" id="inputType" placeholder='Type'  required/>
    </div>
  </div>
 <div className="form-btn">
  <button type="submit" className="submit-btn">Update</button></div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
   )

    
  }
 export default UpdateSup;  