const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price:{
        type: Number,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
})

module.exports = mongoose.model("produits",produitSchema);

