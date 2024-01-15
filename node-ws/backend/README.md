
## install node js 
1. npm init -y
1. npm install typescript express ts-node 
1. npm install --save-dev @types/node @types/express
1. npm install dotenv
1. npx tsc --init
1. npm install -D concurrently nodemon
2. npm install cors @types/cors 
3. add the server to the include (in ts config), you will need to create it ``` "include": ["server/**/*.ts"],
  "exclude": ["node_modules"] ```
1. add the exclude to the ts config, 
2. change the in line 58  ``` "outDir": "./dist" ```                              
3. added the scripts to package.json 
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "npx tsc",
        "start": "ts-node server/app.ts",
        "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/app.js\""
    },
    ```
## create a node server
1. create the file app.ts
2. in the app.ts import express
3. create the app ``` const app = express() ```
4. add ``` app.listen() ```

## create the first api endpoint
1. create the api end point
```
app.get('/', (req , res) => {
    res.send({
        message: 'hey ma'
    })
})
```

## create a router 
1. create a file for the router in our case this is the products.ts
## connect to database 
1. install [prisma](https://www.prisma.io/docs/getting-started/quickstart) 
1. ``` npm install prisma --save-dev ```
1. set up prisma ``` npx prisma init --datasource-provider sqlite ```

### install sqllit
1. install sql lite from [here](https://sqlitebrowser.org/dl/)
1. create a new file (you can call it what ever you want), in the same dir as your tsconfig.json and package.json
1. change the file name and path in the .env file. **(DATABASE_URL="file:../db.db")**
1. optional add data (tables and rows to the db)
1. run ``` npx prisma db pull ```
1. run ``` npx prisma generate ```

## create db connection 
1. create a file name **dbConnection.ts**
1. in this file write 
``` 
import { PrismaClient } from '@prisma/client'
export const prismaDB = new PrismaClient()
```
## create a new api end point and show information from database
1. create a router 
``` 
 import { Router} from 'express'
 import { prismaDB } from './dbConnection.ts'
 export const routerName = Router(); // create the router
```
2. create api endpoint 
```
routerName.get('/example', async (req , response) => {
    const data = await prismaDB.table.findMany(); // get the data from our sql db  
    response.send(data); // send the data to the user
})
```
## create a table using prisma
```
model books {
  id   Int     @id @default(autoincrement())
  name String
  author String
}
```
and then run  ``` npx prisma db push ``` or use ``` npx prisma migrate dev ``` when in production.

## HW
create 5 tables using prisma 
authors, books, authorsOfBooks (many to many) , categoryOfBook (one to many), category
create a 3 pages to display the data display books, display category, display authors

## create react app using vite in the client dir
1. adding cors to your backend ``` npm i cors ```
1. adding types cors to your backend ``` npm i @types/cors ```
1. adding cors 
```
import cors from 'cors'
app.use(cors({
    origin: ['http://localhost:5173']
}));
```

## use react to fetch data from the server
```
  const [blogs, setBlogs] = useState<BlogInterface[]>([])
  async function getData() {
    const res = await fetch('http://localhost:3300/products/example');
    const data: BlogInterface[] = await res.json() ;
    console.log(data);
    setBlogs(data);

  }

  useEffect(() => {
    getData()
  }, []);
```

## install react query
1. ``` npm install react-query ```
1. ``` npm install @types/react-query ```
1. wrap the app with the query client provider
1. create a query client 
```
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { FetchDataReactQuery } from './components/fetchDataReactQuery';

const queryClient = new  QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <FetchDataReactQuery />
      </main>  
    </QueryClientProvider>
  )
}

export default App
``` 

## create you first react query component
```
import { useQuery } from "react-query"

async function getProducts() {
    const res = await fetch('http://localhost:3300/products/example')
    return await res.json() as { name: string, desc: string, id: number}[]
}

export function FetchDataReactQuery() {
    const {isLoading, error , data, isError  } = useQuery('productsNameOfQueryYouCanCallItWhateverYouWant', getProducts)
    if (isLoading) return <h1>loading</h1>
    if (isError) return <h1>error - {String(error)}</h1> 
    return <div>
        {data?.map((blog) => <div key={blog.id}>{blog.name}</div>)}
        <h1>wow react query is awesome</h1>
    </div>
}
```

### create a blog router
```
import { Router } from "express";
import { prismaDB } from "./dbConnection";

export const blogRouter = Router()
// get all blogs (max of 5 blogs)
blogRouter.get('/list', async (req, res) => {
    const data = await prismaDB.blog.findMany({
        take: 5,
    });
    res.send(data)
});

```
### use the blog router in the app.ts
```
app.use('/blog', blogRouter)
```

### using zod as an example
```
const mySchemaString = z.object({
    title: z.string().min(5).max(10),
    content: z.string().min(3)
});

const myString = mySchemaString.safeParse(req.body);
if (myString.success) {
    res.send(myString.data)
} else {
    res.send(myString.error.message)
}
```


### adding cors
1. ``` npm i cors ```
2. ``` npm i @types/cors ```
3. in the app.ts ``` import cors from 'cors' ```
4. ``` app.use(cors({
    origin: ['http://localhost:5173']
})); ```


### parse json body
1. add the app.use ``` app.use(express.json()) ```
2. send the data and check if it is working
3. add trpc to the server ``` npm install @trpc/server ```


### added trpc to the server


### added comment table
1. adding the table to the prisma ``` model Comment {
  id Int @id @default(autoincrement())
  comment String
} ```