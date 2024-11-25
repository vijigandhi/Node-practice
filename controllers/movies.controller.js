import movie from "../models/movie.model.js";

export const movieIndex = async(req, res) => {
    try{
        const movies = await movie.find();
        res.json(movies);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const movieCreate = async(req, res) => {

    //data validation
    const newMovie = new movie({
        title: req.body.title,
        desc: req.body.desc
    });

    try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch(error) {
        return res.status(400).json({message: error.message})
    }

};

export const movieDetails = async(req, res) => {
    try{
        const movie = await movie.findById(req.params.id);
        if(movie == null) {
         return res.status(404).json({message:"cannot find movie"})
        } else {
         res.json(movie)
        }
     } catch(error) {
         return res.status(500).json({message:error.message});
     }
};

export const movieUpdate = async (req, res) => {
    try {
        // Validate input
        const updates = {};
        if (req.body.title) updates.title = req.body.title;
        if (req.body.desc) updates.desc = req.body.desc;

        // Update the movie document
        const updatedMovie = await movie.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true } // Return the updated document and apply validation
        );

        // If the movie is not found
        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        // Send updated movie as a response
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const movieDelete = async(req, res) => {
    const movieId = req.params.id;

    try{
        await movie.deleteOne({_id: movieId})
        res.json({message: "Movie deleted!"});
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};