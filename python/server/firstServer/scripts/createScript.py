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

    inserted_doc = collection.insert_one({
        "title" : 'what ever python want',
        "likes": "9"
    })

    print(f'doc was inserted {inserted_doc}')
except Exception as e:

    print(e)