const express=require("express")
const app =express();
const PORT=6500

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static())
app.use('style',express.static(__dirname + '/style'))
// app use test
app.set('view engine', 'pug'); // template engine
app.set("views","./views");

app.get("/Accuiel",(req,res)=>{
    res.sendFile(__dirname +"/views/Accuiel.html")
})

app.get("/Contact",(req,res)=>{
    res.sendFile(__dirname +"/views/Contact.html")
})

app.get("/Service",(req,res)=>{
    res.sendFile(__dirname +"/views/Service.html")
})





app.listen(PORT,(err)=>{
    err?console.log(err):console.log(`the server is runing with ${PORT}`)
})