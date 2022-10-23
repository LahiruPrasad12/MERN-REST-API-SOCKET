const router = require("express").Router();
let StockOrder = require("../models/StockOrder");

router.route("/add").post((req,res)=>{ //add a new stockorder

    const supplierId=req.body.supplierId;
    const orderNumber=req.body.orderNumber;
    const date=req.body.date;
    const description=req.body.description;
    const status=req.body.status;
    const amount=req.body.amount;
    

    const newStockOrder = new StockOrder({
      
        supplierId,
        orderNumber,
        date,
        description,
        status,
        amount
        

})

    newStockOrder.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{ //get all stockorder details

    StockOrder.find().then((stockorder)=>{
        res.json(stockorder)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{ //update a stockorder
    let stockorderID=req.params.id;
    const {supplierId,orderNumber,date,description,status,amount}=req.body;

    const updateStockOrder={
        supplierId,
        orderNumber,
        date,
        description,
        status,
        amount
        
     }
     const update=await StockOrder.findByIdAndUpdate(stockorderID,updateStockOrder).then(()=>{
        res.status(200).send({status:"Order Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.messege});
    })
})


router.route("/delete/:id").delete(async(req,res) =>{//delete a stockorder
    let stockorderID=req.params.id;

    await StockOrder.findByIdAndDelete(stockorderID).then(()=>{
        res.status(200).send({status:"Order Deleted"});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with delete user",error:err.messege});
    })
})

router.route("/get/:id").get(async(req,res)=>{ //get only one stockorder details
    let stockorderID=req.params.id;
    const user=await StockOrder.findById(stockorderID).then((stockorder)=>{
        res.status(200).send({status:"StockOrder Fetched",stockorder});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with get user",error:err.messege});   
    })
})

module.exports=router;