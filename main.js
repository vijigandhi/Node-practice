import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectMongo from "./database/db.js";

const app = express();
const port  = 8080;

//data understanding middleware
app.use(express.json());

connectMongo();

app.get('/',(req,res) => {
    res.json({msg:"hello world"});
})


// CRUD functionalities of movies
app.use('/movies',movieRoutes); // middleware access


app.listen(port,() => {
    console.log(`the server is running at http://localhost:${8080}`);
    
});