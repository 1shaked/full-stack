import pandas as pd

table = pd.read_excel('python/files/exampleData.xlsx')


table['age_with_name'] = table['age' ].astype(str) + table['name' ]
# table.toj
print(table[['age', 'age_with_name']])

table.to_json('python/files/exampleData.json')