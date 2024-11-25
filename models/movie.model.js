
import {Schema, model} from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true, // mongoose validation
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
});

const movie = model("movie",schema)

export default movie;