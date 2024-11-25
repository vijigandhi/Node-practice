import express from "express";
import { movieCreate, movieDelete, movieDetails, movieIndex, movieUpdate } from "../controllers/movies.controller.js";
const moviesRouter = express.Router();


// /movies/movies
// For reading movies
moviesRouter.get('/',movieIndex);

moviesRouter.get('/:id', movieDetails)

//For creating movies
moviesRouter.post('/',movieCreate);


// For updating movies
moviesRouter.put('/:id',movieUpdate);


// For deleting movies
moviesRouter.delete('/:id',movieDelete);

export default moviesRouter;