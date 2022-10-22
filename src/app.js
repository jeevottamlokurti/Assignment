const express=require('express');
const app=express();
const errorLogger=require("./middlewares/errorLogger");
const requestLogger=require("./middlewares/requestLogger");
const router=require("./routes/routing")
const cors=require('cors');
let port= 8080

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger);
app.use(router);
app.use(errorLogger);

//listening on 8080 port
app.listen(port);
console.log("Server Started on port" + port)