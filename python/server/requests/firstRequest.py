# pip install requests
import requests # import the library


print('1')
# create
res = requests.get('http://localhost:3301/x')
print('2')
# print the response json
print(res.json())
print('3')

