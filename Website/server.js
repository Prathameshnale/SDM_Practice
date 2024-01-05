var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to  IET");});
app.get("/product",(req, res)=>{var p={ "id":45 };
                                       res.send(p);
});
app.listen(8876);
console.log("App is listening on port 8876");