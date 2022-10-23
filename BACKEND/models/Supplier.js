const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const supplierSchema = new Schema({

    supplierId :{
        type:String,
        required:true
    },
    companyName :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    companyPhone :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactName :{
        type:String,
        required:true
    },
    mobile :{
        type:String,
        required:true
    },
    type :{
        type:String,
        required:true
    }
    

})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;

