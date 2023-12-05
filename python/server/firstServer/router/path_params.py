from fastapi import APIRouter

path_params_router = APIRouter()

@path_params_router.get('/item/{item_id}')
def read_item(item_id: int):
    # call the database to fetch the data

    # 
    return {
        "message": f'there is an item is {item_id}'
    }