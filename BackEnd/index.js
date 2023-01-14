const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const categorieRoute = require('./routes/categorie.route');
const produitRoute = require('./routes/produit.route');
const wishlistRoute=require('./routes/wishlist.route')
const userRoute=require('./routes/user.route')
const app = express();
const cors = require('cors')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))
app.use(
    cors({
      origin: "http://localhost:3000", // <-- location of the react app were connecting to
      credentials: true,
    })
  );

// mongoose connect
mongoose.connect(process.env.DB_CONNECT);
mongoose.connection.on("connected",()=> {
    console.log("database connected successfully.")
})
mongoose.connection.on("error",(err)=> {
    console.log("error when connected to the database ",err)
})



app.listen(process.env.APP_PORT,()=> {
    console.log(`server listning on port ${process.env.APP_PORT}`)
})

app.use("/api/produit",produitRoute);
app.use("/api/categorie",categorieRoute);
app.use("/api/user",userRoute);
app.use("/api/wishlist",wishlistRoute);


