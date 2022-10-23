import React, {useState, useEffect } from 'react';
import {NavLink}from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"



const ViewSup=()=>{




    //view data

   const [getuserdata,setUserdata]=useState([]);
   const [ldt,setDLTdata]=useState([]);
  console.log(getuserdata);



  const getdata=async(e)=>{
 

    
    const res =await fetch("http://localhost:8090/supplier",{

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




  //delete supplier

const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:8090/supplier/delete/${id}`, {
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

  function generatePDF() {
    const doc = new jspdf();
    const tableColumn = ["Supplier ID", "Company Name", "Address", "Company Phone", "Email", "Contact Name", "Mobile", "Type"];
    const tableRows = [];

    getuserdata.slice(0).reverse().map(pdf => {
        const pdfData = [
            pdf.supplierId,
            pdf.companyName,
            pdf.address,
            pdf.companyPhone,
            pdf.contactName,
            pdf.mobile,
            pdf.type
        ];
        tableRows.push(pdfData);
    });

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("SUPPLIER-Details-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`SUPPLIER-Details-Report_${dateStr}.pdf`);

}
  
  





    return(

<div>{/* className="container" */}
<button onClick={generatePDF}>Generate Report</button>
        <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Supplier ID</th>
      <th scope="col">Company Name</th>
      <th scope="col">Address</th>
      <th scope="col">Company Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Type</th>
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
      <td>{element.companyName}</td>
      <td>{element.address}</td>
      <td>{element.companyPhone}</td>
      <td>{element.email}</td>
      <td>{element.contactName}</td>
      <td>{element.mobile}</td>
      <td>{element.type}</td>
      <td></td>
      <td></td>
      <td className="d-flex justify-content-between">
      <NavLink to={`updateSup/${element._id}`}> <button className="btn btn-dark" ><i className="fa-regular fa-pen-to-square"></i></button></NavLink>
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



export default ViewSup;
