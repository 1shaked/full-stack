import json 
with open(r'python/files/example.json', 'r') as f:
    json_var = json.load(f); 

print(json_var['ages'])