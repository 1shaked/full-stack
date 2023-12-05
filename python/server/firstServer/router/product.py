from fastapi import APIRouter

router_product =  APIRouter()

@router_product.get('/y')
def read_data():
    return ['x' , 'y' , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]


@router_product.get('/x')
def read_data():
    return {
        "message": 'x',
        "age": 24,
    } 

