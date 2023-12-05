from typing import Union
from fastapi import FastAPI
from example import example_func
# from router.product import test
from router.product import router_product
app = FastAPI()

app.include_router(router_product, prefix='/product')

@app.get("/")
def read_root():
    return example_func()
    # return {"Hello": "World", "arr": [1 , 2 , 3]}


@app.get("/x")
def read_root():
    return {"message": "Hello World"}


@app.get("/product/z")
def read_root():
    return {"message": "in the z section"}



# hey...
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}