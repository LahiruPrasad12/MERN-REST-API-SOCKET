import React,{useState} from 'react';
import axios from "axios"; 
import{useNavigate} from 'react-router-dom';

export default function AddStockO (){


 //when fill the form all the values are assigns 
  const [supplierId ,setID]=useState("");
  const[orderNumber,setOrderNumber]=useState("");
  const[date,setDate]=useState("");
  const[description,setDes]=useState("");
  const[status,setStatus]=useState("");
  const[amount,setAmount]=useState("");

  
  
  const Navigate = useNavigate();
 
 function sendData(e){ //when click on submit button senddata function executes
   e.preventDefault();
 // alert("Insert")

 //create js object
 const newStockOrder={
    supplierId,
    orderNumber,
    date,
    description,
    status,
    amount





  
 }
 // console.log(newStockOrder); You can see send data on console

 axios.post("http://localhost:8090/stockorder/add",newStockOrder).then(()=>{
   /*  Navigate('/') */
    alert("StockOrder is Added")
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
          <p>Add Stock Order</p>

    <form onSubmit={sendData}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputSupID" className="form-label">Supplier ID</label>
      <input type="text" class="form-control" id="inputSupID"   name="supplierId" placeholder="Enter Supplier ID here" onChange={(e)=>{

setID(e.target.value);
}} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputOrederNo" className="form-label">Order Number</label>
      <input type="text" class="form-control" id="inputOrederNo"  name="orderNumber" placeholder="Enter Order Number here" onChange={(e)=>{

setOrderNumber(e.target.value);
}} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputdate" className="form-label">Date</label>
      <input type="date" class="form-control" id="inputdate" name="date"  onChange={(e)=>{

setDate(e.target.value);
}}required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputDes" className="form-label">Description</label>
      <input type="text" class="form-control" id="inputDes"  name="description" placeholder="Enter Description here" onChange={(e)=>{

setDes(e.target.value);
}}required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputStatus" className="form-label">Status</label>
      <input type="text" class="form-control" id="inputStatus"  name="status"  placeholder="Status" onChange={(e)=>{

setStatus(e.target.value);
}}required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputAmount" className="form-label">Amount</label>
      <input type="text" class="form-control" id="inputAmount" placeholder="Input amount here" onChange={(e)=>{

setAmount(e.target.value);
}}required/>
    </div>
    <div className="form-btn">
    <button type="submit" class="submit-btn">Add Stock Order</button></div>
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