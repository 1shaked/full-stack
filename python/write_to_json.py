
import json
with open(r'python/files/example_write.json', 'w') as f:

    arr = [1 , 'apple' , False , [1 , 5] , { "a" : 100 } ]
    json.dump(arr, f, indent=2)