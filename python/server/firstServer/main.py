from typing import Union
from fastapi import FastAPI
from example import example_func
# from router.product import test
from router.product import router_product
from router.test import test_router
from router.path_params import path_params_router
from router.query_params import query_params_router
app = FastAPI()

app.include_router(router_product, prefix='/product')
app.include_router(test_router, prefix='/test')
app.include_router(path_params_router, prefix='/path_params')
app.include_router(query_params_router, prefix='/query_params')
@app.get("/")
def read_root():
    return example_func()
    # return {"Hello": "World", "arr": [1 , 2 , 3]}


@app.get("/x")
def read_root():
        
    return { "message": "Hello World"}


@app.get("/product/z")
def read_root():
    return {"message": "in the z section"}



# hey...
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}