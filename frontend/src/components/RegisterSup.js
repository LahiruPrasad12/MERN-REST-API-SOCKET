import React,{useState} from 'react';
import axios from "axios"; 
import{useNavigate} from 'react-router-dom';

export default function RegisterSup (){


    //when fill the form all the values are assigns 
  const [supplierId ,setID]=useState("");
  const[companyName ,setCompanyName]=useState("");
  const[address,setAddress]=useState("");
  const[companyPhone,setCompanyPhone]=useState("");
  const[email,setEmail]=useState("");
  const[contactName,setContactName]=useState("");
  const[mobile ,setMobile]=useState("");
  const[type,setType]=useState("");
  
  
  const Navigate = useNavigate();
 
 function sendData(e){ //when click on submit button senddata function executes
   e.preventDefault();
 // alert("Insert")

 //create js object
 const newSupplier={
    supplierId ,
    companyName,
    address,
    companyPhone,
    email,
    contactName,
    mobile,
    type

  
 }
 // console.log(newSupplier); You can see send data on console

 axios.post("http://localhost:8090/supplier/add",newSupplier).then(()=>{
    /* Navigate('/') */
    alert("Supplier is Added")
 }).catch((err)=>{
  alert(err)
 })
//put data to database from backend
 }



 






    return(

      <div id="booking" className="section">
        <div className="section-center">
  <div className="container">
    <div className="row">
      <div className="booking-form">
        <div className="form-header">
          <p>Register a Supplier</p>
        <form onSubmit={sendData}>
   <div className="form-group">    
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputID" className="form-label">Supplier ID</label>
      <input type="text" className="form-control" id="inputID" placeholder="Enter Supplier ID here"  onChange={(e)=>{

setID(e.target.value);
}} required />
    </div>
    <div className="form-group col-md-6">
      <label for="inputCompanyname" className="form-label">Company Name</label>
      <input type="text" className="form-control" id="inputCompanyname" placeholder="Enter Company name here"   onChange={(e)=>{

setCompanyName(e.target.value);
}} required/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress"className="form-label" >Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address here"  onChange={(e)=>{

setAddress(e.target.value);
}}required />
  </div>


  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputphone" className="form-label">Company phone</label>
      <input type="text" className="form-control" id="inputphone" placeholder="Enter Company phone number here"   onChange={(e)=>{

setCompanyPhone(e.target.value);
}} required/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputemail" className="form-label">Email</label>
      <input type="email" className="form-control" id="inputemail" placeholder="Enter Email here"  onChange={(e)=>{

setEmail(e.target.value);
}} autocomplete="off" required />
    </div>
  </div>

  
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputContactname" className="form-label">Contact Name</label>
      <input type="text" className="form-control" id="inputContactname" placeholder='Enter name here'  onChange={(e)=>{

setContactName(e.target.value);

}} required />
    </div>
   
    <div className="form-group col-md-2">
      <label for="inputMobile" className="form-label">Mobile</label>
      <input type="text" className="form-control" id="inputMobile"placeholder='0778911672'   onChange={(e)=>{

setMobile(e.target.value);
}}minlength="10" required/>
    </div>

    <div className="form-group col-md-4">
      <label for="inputType" className="form-label">Type</label>
      <input type="text" className="form-control" id="inputType"placeholder='Type'  onChange={(e)=>{

setType(e.target.value);
}}/>
    </div>
  </div>
 <div className="form-btn">
  <button type="submit" className="submit-btn">Proceed to Register</button></div>
  </div> 
</form>
</div>
</div>
</div>
</div>
</div>
</div>
    )
}