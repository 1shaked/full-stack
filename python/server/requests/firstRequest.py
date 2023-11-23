# pip install requests
import requests


res = requests.get('http://localhost:3301/x')
print(res.json())