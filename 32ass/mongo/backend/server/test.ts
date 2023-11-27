const uri = "connectionString";
import { MongoClient, ServerApiVersion } from 'mongodb' ;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = client.db('cluster0')
    const collection = database.collection('People')
    const res = await collection.insertOne({
        name: 'tat',
        last: 'tat',
        age: 24,
        b: false,
        arr: [-200]
    });
    console.log('a document was added to MongoDB with the id ->' ,  res.insertedId)
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);