const mongoose=require("mongoose");

const blogs_schema=mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
    image: String,
    date: String
  }
);

const BlogModel=mongoose.model("blogs",blogs_schema);

module.exports=BlogModel;
