import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String
},
    {
        timestamps: true
    })


// This is for creating new table in the database
var PostModel = mongoose.model("Posts", postSchema)

export default PostModel