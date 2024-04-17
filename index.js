//Import
import express from "express";
import path from "path";


//Server
const app = express ()

//Middle ware
app.use(express.static(path.join(path.resolve(), "public")))



//Setting up view engine
app.set("view engine", "ejs")



app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/service", (req, res)=>{
    res.render("service")
})

//Server Listen

app.listen(8000, ()=>{
    console.log("Server is working.")
})