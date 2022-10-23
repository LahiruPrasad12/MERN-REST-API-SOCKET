const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const stockorderSchema = new Schema({

    supplierId :{
        type:String,
        required:true
    },
    orderNumber :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
     description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    amount :{
        type:String,
        required:true
    }
    
})

const StockOrder= mongoose.model("StockOrder",stockorderSchema);

module.exports = StockOrder;

