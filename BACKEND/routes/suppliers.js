const router = require("express").Router();
let Supplier = require("../models/Supplier");

router.route("/add").post((req,res)=>{ //add a new supplier

    const supplierId=req.body.supplierId;
    const companyName=req.body.companyName;
    const address =req.body.address;
    const companyPhone=req.body.companyPhone;
    const email=req.body.email;
    const contactName=req.body.contactName;
    const mobile =req.body.mobile;
    const type=req.body.type;

    const newSupplier = new Supplier({
      
        supplierId,
        companyName,
        address,
        companyPhone,
        email,
        contactName,
        mobile,
        type

})

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{ //get all supplier details

    Supplier.find().then((supplier)=>{
        res.json(supplier)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{ //update a supplier
    let supplierID=req.params.id;
    const {supplierId,companyName,address,companyPhone,email,contactName,mobile,type}=req.body;

    const updateSupplier={
       
        supplierId,
        companyName,
        address,
        companyPhone,
        email,
        contactName,
        mobile,
        type
     }
     const update=await Supplier.findByIdAndUpdate(supplierID,updateSupplier).then(()=>{
        res.status(200).send({status:"Supplier Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.messege});
    })
})


router.route("/delete/:id").delete(async(req,res) =>{//delete a supplier
    let supplierID=req.params.id;

    await Supplier.findByIdAndDelete(supplierID).then(()=>{
        res.status(200).send({status:"Supplier Deleted"});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with delete user",error:err.messege});
    })
})

router.route("/get/:id").get(async(req,res)=>{ //get only one supplier details
    let supplierID=req.params.id;
    console.log(supplierID);
    const suplier = await Supplier.findById(supplierID)
    res.status(200).send({status:"Supplier Fetched",suplier});
    // const supplier=await Supplier.findById(supplierID).then((supplier)=>{
        
    // }).catch((err)=>{
    //     console.log(err.messege);
    //     res.status(500).send({status:"Error with get user",error:err.messege});   
    // })
})

module.exports=router;