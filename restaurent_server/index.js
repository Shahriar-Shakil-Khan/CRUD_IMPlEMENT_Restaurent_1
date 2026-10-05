 const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
 const dns = require('dns');
 dns.setServers(['8.8.8.8', '8.8.4.4']);
 const express = require('express');
 const cors = require('cors');
 require('dotenv').config({ quiet: true });

 const app = express();
 const port = process.env.PORT || 3000;

 // Middleware
 app.use(cors());
 app.use(express.json());


 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0jj0hhq.mongodb.net/?appName=Cluster0`;

 const client = new MongoClient(uri, {
 serverApi: {
 version: ServerApiVersion.v1,
 strict: true,
 deprecationErrors: true,
 },
 serverSelectionTimeoutMS: 5000, 
 });

 async function run() {
 console.log('Connect to MongoDB');
 try {
 await client.connect();
 await client.db('admin').command({ ping: 1 });
 console.log('Pinged your deployment. You successfully connected to MongoDB!');

  const recipeCollection = client.db('RestaurentDB').collection('recipe');

 app.get('/recipe', async (req, res) => {
 // const cursor = coffeeCollection.find();
 // const result = await cursor.toArray();
 const result = await recipeCollection.find().toArray();
 res.send(result);
 });

 app.get('/recipe/:id', async (req, res) => {
 const id = req.params.id;
 const query = { _id: new ObjectId(id) };
 const result = await recipeCollection.findOne(query);
 res.send(result);
 });

 app.post('/recipe', async (req, res) => {
 const newRecipe = req.body;
 const result = await recipeCollection.insertOne(newRecipe);
 res.send(result);
 });



app.put('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const { name, quantity, supplier, taste, price, photo, details } = req.body;

  const updateDoc = {
    $set: { name, quantity, supplier, taste, price, photo, details },
  };

  const result = await recipeCollection.updateOne(filter, updateDoc);
  res.send(result);
});


app.patch('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };

  const updateDoc = {
    $set: req.body,
  };

  const result = await recipeCollection.updateOne(filter, updateDoc);
  res.send(result);
});

 app.delete('/recipe/:id', async (req, res) => {
 const id = req.params.id;
 const query = { _id: new ObjectId(id) };
 const result = await recipeCollection.deleteOne(query);
 res.send(result);
 });

 
 } catch (err) {
 console.log('CONNECTION FAILED:', err.message);
 }
 
 }
 run();


 app.get('/', (req, res) => {
 res.send('Restaurent Server is running');
 });


 app.get('/ping', async (req, res) => {
 try {
 await client.db('admin').command({ ping: 1 });
 res.send('MongoDB connected ✅');
 } catch (err) {
 res.status(500).send('MongoDB not connected ❌ ' + err.message);
 }
 });

 app.listen(port, () => {
 console.log(`Restaurent Server listening on port ${port}`);
 });