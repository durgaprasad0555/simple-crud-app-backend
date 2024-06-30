const express=require("express");

const mongoose=require("mongoose");
const Product =require("./models/product.model.js")
const productRoute=require("./routes/product.route.js");
const app=express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))



//routes
app.use("/api/products",productRoute);


app.get("/",(req,res)=>{
    res.send("hello from us node api called")
})

// app.get('/api/products',async(req,res)=>{
//     try {
//        const products= await Product.find({});
//        res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

// app.post("/api/products",async (req,res)=>{
//    try {
//    const product= await Product.create(req.body);
//    res.status(200).json(product);
//    } catch (error) {
//    res.status(500).json({message:error.message})
//    }
// })

// app.get("/api/products/:id",async(req,res)=>{
// try {
//     const {id}=req.params;
//     const product= await Product.findById(id);
//     res.status(200).json(product);
// } catch (error) {
//     res.status(500).json({message:error.message});
// }
// })

//update a product 


// app.put("/api/products/:id",async(req,res)=>{
//     try {
//         const {id }=req.params;

//         const product=await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             return res.status(404).json({message:"product not found"});
//         }
//         const updateproduct=await Product.findById(id);
//         res.status(200).json(updateproduct);

//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

//delete a product
// app.delete('/api/products/:id',async(req,res)=>{
//     try {
//         const {id}=req.params;
//        const product= await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(404).json({message:"product not found"});
//         }
//        res.status(200).json({message:"Product has been succussfully delted"});
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

mongoose.connect("mongodb+srv://durga:durga@cluster0.cbegssz.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Mongo-Db Connected");
    app.listen(3000,()=>{
        console.log("server is to  running on port to  3000")
    })
}).catch(()=>{
    
    console.log("The Error will occured");
})