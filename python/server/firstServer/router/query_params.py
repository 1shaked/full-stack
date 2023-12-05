from fastapi import APIRouter

query_params_router = APIRouter()

@query_params_router.get('/x')
def read_query_params(limit: int = 10, node: str = ''):
    return {"limit": limit, "node": node}


@query_params_router.get('/y/{id}')
def read_query_params(id: int,limit: int = 10, node: str = ''):
    return {"limit": limit, "node": node, "id": id}
