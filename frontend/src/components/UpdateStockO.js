import React,{useEffect, useState}from 'react'
import{useParams} from 'react-router-dom';
import axios from "axios"






const UpdateStockO=()=>{

  

  const {id} =useParams();
const [supplierId ,setID]=useState('');
const[orderNumber ,setOrderNumber]=useState('');
const[date,setDate]=useState('');
const[description,setDescription]=useState('');
const[status,setStatus]=useState('');
const[amount,setAmount]=useState('');

    useEffect(()=>{
      sendRequest()
    },[])
    const sendRequest = async()=>{
        try{
          const res =(await axios.get(`http://localhost:8090/stockorder/get/${id}`)).data.stockorder;
          setID(res.supplierId);
          setOrderNumber(res.orderNumber);
          setDate(res.date);
          setDescription(res.description);
          setStatus(res.status);
          setAmount(res.amount);
        
         
      }catch(err){ console.log(err)};
            
      
    }
   

  const sendData =async(e)=>{

      e.preventDefault();

     try{
      const res =await axios.put(`http://localhost:8090/stockorder/update/${id}`,{
      supplierId: supplierId,
      orderNumber: orderNumber,
      date: date,
      description: description,
      status: status,
      amount: amount,
    
      }).then(()=>{
          alert("You have successfully updated.")
          window.location.href="/viewOrder"
         
  } )
  } catch (err){

      // setError(err.response.data);

  }

  }







    return(
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
          <div className="row">
      <div className="booking-form">
        <div className="form-header">
          <p>Update StockOrder</p>

        <form  onSubmit={sendData}>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputSupID" className="form-label">Supplier ID</label>
          <input type="text" class="form-control" id="inputSupID" name="supplierId" value={supplierId}  onChange={e=>{setID(e.target.value)}}/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputOrederNo" className="form-label">Order Number</label>
          <input type="text" class="form-control" id="inputOrederNo" name="orderNumber" value={orderNumber} onChange={e=>{setOrderNumber(e.target.value)}} />
        </div>
        <div class="form-group col-md-6">
          <label for="inputdate" className="form-label">Date</label>
          <input type="date" class="form-control" id="inputdate" name="date" value={date} onChange={e=>{setDate(e.target.value)}}/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputDes" className="form-label">Description</label>
          <input type="text" class="form-control" id="inputDes" name="description" value={description} onChange={e=>setDescription(e.target.value)} />
        </div>
        <div class="form-group col-md-6">
          <label for="inputStatus" className="form-label">Status</label>
          <input type="text" class="form-control" id="inputStatus" name="status" value={status}  onChange={e=>{setStatus(e.target.value)}} />
        </div>
        <div class="form-group col-md-6">
          <label for="inputAmount" className="form-label">Amount</label>
          <input type="text" class="form-control" id="inputAmount"  name="amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        </div>
        <div className="form-btn">
  <button type="submit" className="submit-btn">Update Stock</button></div>
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
export default UpdateStockO; 