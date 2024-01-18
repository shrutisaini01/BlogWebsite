require('dotenv').config();

const express=require("express");
const mongoose=require("mongoose");
var bodyParser=require("body-parser");
const cors=require("cors");
const path=require('path');

const database=require("./database/data");

const BlogModel=require("./database/blogs");

const blog=express();

blog.use(bodyParser.urlencoded({extended:true}));
blog.use(bodyParser.json());
blog.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
});


//to get all blogs
blog.get("/",async(req,res)=> {
  const getAllBlogs=await BlogModel.find();
  return res.json(getAllBlogs);
});

//css and js files linkage
blog.use('/css', express.static(path.join(__dirname, 'css')));
blog.use('/js', express.static(path.join(__dirname, 'js')));
blog.use(express.json());

//serve index.html
blog.get("/home", async(req,res) => {
  res.sendFile(path.join(__dirname,'index.html'));
  console.log("CONNECTED SUCCESSFULLY!");
});

//serve about.html
blog.get("/abt", async(req,res) => {
  res.sendFile(path.join(__dirname,'about.html'));
});


//serve search.html
blog.get("/search", async(req,res) => {
  res.sendFile(path.join(__dirname,'search.html'));
});


//serve contact.html
blog.get("/contact", async(req,res) => {
  res.sendFile(path.join(__dirname,'contact.html'));
});

//serve blog.html
blog.get("/blog", async(req,res) => {
  res.sendFile(path.join(__dirname,'blogPost.html'));
});


//add a new post
blog.post("/new", async(req,res) => {
  const {title, content, author, image} = req.body;
  const newPost = new BlogModel({title, content, author, image});

  await newPost.save()
    .then((savedPost) => res.json(savedPost))
    .catch((error) => res.status(500).json({ error: error.message }));
});  

//listening to port 8080
blog.listen(8080, () => {
  console.log("server is up and running!");
});
