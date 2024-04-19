const express = require("express");
const app = express();
require("dotenv").config(); 
const port = process.env.PORT || 4000; 
app.use(express.json())
const todoRoutes = require("./Routes/todo")
app.use("/api/v1", todoRoutes);
app.listen(port, ()=>{ 
    console.log(`server started at ${port}`) 
})

const dbconnect = require("./Config/database")
dbconnect();
app.get("/",(req,res)=>{
    res.send(`<h1> this is homepage</h1>`)
})