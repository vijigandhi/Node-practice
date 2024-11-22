import express from "express";
const app = express();

const port  = 8080;
app.get('/',(req,res) => {
    res.json({msg:"hello world"});
})

app.listen(port,() => {
    console.log(`the server is running at http://localhost:${8080}`);
    
});