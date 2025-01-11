const express=require('express'); //importing express lib
const app=express(); //creating app for express (express() - constructor)

//creating server and listening server
app.listen(1234,()=>{
console.log("Server running");
});
//RESTfull web service wqe need to add - get operation 
// app.get('/',(req,res,next)=>{
// res.send("abhinaya");
// });

// app.get('/530',(req,res)=>{
//     res.send("Sneha");});

// app.get('/name',(req,res)=>{
// const arr=[
//     {"id":1, "name":"Swetha"},
//     {"id":2,"name":"Anjali"},
//     {"id":3,"name":"Akshitha"}
// ];
// res.json(arr);
// });

app.get('/',(req,res)=>{
    res.send("Read");
    });
app.post('/',(req,res)=>{
    res.send("created");});
app.put('/',(req,res)=>{
    res.send("Updated");});
app.delete('/',(req,res)=>{
    res.send("Deleted");});
