from typing import Union
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World", "arr": [1 , 2 , 3]}


@app.get("/x")
def read_root():
    return {"message": "Hello World"}

# hey
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}