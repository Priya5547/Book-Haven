const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
  res.send("Hello I am about")
})

app.get('/email',(req,res)=>{
  res.send("I Am Email")
})
app.get('/contact',(req,res)=>{
  res.send("I Am Contact")
})
// mongodb connection

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://root:root@cluster0.ejjrrps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = client.db("productInventory").collection("products")
    const bookCollection=client.db("bookInventory").collection("book")

    app.post("/upload-product",async(req,res)=>{
      const data = req.body
      const result = await productCollection.insertOne(data)
      res.send(result)
    })

      app.post("/upload-book",async(req,res)=>{
        const data = req.body
        const result = await bookCollection.insertOne(data)
        res.send(result)
    })

    app.get("/all-book",async(req,res)=>{
      const books=bookCollection.find()
      const result=await books.toArray()
      res.send(result)
    })

    app.get("/filter-book/:category", async (req,res)=> {
      const category = req.params.category
      const book = bookCollection.find({category:category})
      const result = await book.toArray()  
      res.send(result)
    })

    app.get("/find-book/:id", async (req,res)=>{
      const id = req.params.id
      const book = await bookCollection.findOne({_id: new ObjectId(id)})
      res.send(book)
    })
    app.delete("/delete-book/:id",async(req,res)=>{
      const id = req.params.id
      const result =await bookCollection.deleteOne({_id: new ObjectId(id)})
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// connection end

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
