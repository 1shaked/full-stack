# pip install requests
import requests


res = requests.get('http://localhost:8000/x')

print(res)
print(res.json())