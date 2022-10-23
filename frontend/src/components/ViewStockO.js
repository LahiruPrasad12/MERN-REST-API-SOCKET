import React, {useState, useEffect } from 'react';
import {NavLink}from 'react-router-dom'




const ViewStockO=()=>{

    //view data

   const [getuserdata,setUserdata]=useState([]);
   const [ldt,setDLTdata]=useState([]);
  console.log(getuserdata);



  const getdata=async(e)=>{
 

    
    const res =await fetch("http://localhost:8090/stockorder",{

      method:"GET",
      headers:{"Content-Type":"application/json"},

      
    });

 const data= await res.json();
 console.log(data);

   if (res.status===404 ||!data)
{
  console.log("error");

}else{
 setUserdata(data);
  console.log("data fetched");
}
}

  useEffect(()=>{
    getdata();
  },[]) 




  //delete user

const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:8090/stockorder/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
  
    const deletedata = await res2.json();
    console.log(deletedata);
  
    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        setDLTdata(deletedata)
        getdata();
    }
  
  
  }
  
  





    return(

<div>{/* className="container" */}
        <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Supplier ID</th>
      <th scope="col">Order Number</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Amount</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

    {getuserdata.map((element,id)=>{

        return(

            <>
            <tr>
            <th scope="row">{id+1}</th>
      <td>{element.supplierId}</td>
      <td>{element.orderNumber}</td>
      <td>{element.date}</td>
      <td>{element.description}</td>
      <td>{element.status}</td>
      <td>{element.amount}</td>
      <td></td>
      <td></td>
      <td className="d-flex justify-content-between">
      <NavLink to={`/updateStock/${element._id}`}><button className="btn btn-dark" ><i className="fa-regular fa-pen-to-square"></i></button></NavLink>
      <button className="btn btn-dark" onClick={() => deleteuser(element._id)}><i className="fa-regular fa-trash-can"></i></button>
      </td>


            </tr>
            </>
        )
    })}

    

     
  
 
  </tbody>
</table>
</div>

    )
}



export default ViewStockO;
