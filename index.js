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

app.get("/contact", (req, res)=>{
    res.render("contact")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/teaching", (req, res)=>{
    res.render("teching")
})

app.get("/games", (req, res)=>{
    res.render("games")
})

app.get("/gallery", (req, res)=>{
    res.render("gallery")
})

app.get("/activities", (req, res)=>{
    res.render("activities")
})

app.get("/introduction", (req,res)=>{
    res.render('introduction')
})

app.get("/mission", (req,res)=>{
    res.render('mission')
})

app.get("/vision", (req,res)=>{  
    res.render('Vision')
})

//Server Listen

app.listen(8000, ()=>{
    console.log("Server is working.")
})