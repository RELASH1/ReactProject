const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique : true ,
        index : true 
    },
    description: {
        type: String,
        require:true
    }
})

module.exports = mongoose.model("Categories",categorieSchema);
