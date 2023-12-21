from fastapi import APIRouter
import json
test_router = APIRouter()


@test_router.get('/route1')
def test_route1():
    with open('./json/example_json.json', 'r') as f:
        data = json.loads(f.read())
    return ['text' , 2, True, False, data]