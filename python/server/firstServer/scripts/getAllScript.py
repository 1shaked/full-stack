from pymongo.mongo_client import MongoClient
from secret import uri
# Create a new client and connect to the server
client = MongoClient(uri)
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")

    db = client['cluster0']

    collection = db['Post']

    documents = collection.find()
    
    for doc in documents:
        print(doc)
        # print(json.dumps(doc, indent=2))

except Exception as e:
    
    print(e)