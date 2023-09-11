
## install node js 
1. npm init -y
1. npm install typescript express ts-node 
1. npm install --save-dev @types/node @types/express
1. npm install dotenv
1. npx tsc --init
1. npm install -D concurrently nodemon
1. add the server to the include (in ts config), you will need to create it
1. add the exclude to the ts config, 
1. added the scripts to package.json 
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
1. in the app.ts import express
1. create the app ``` const app = express() ```
1. add ``` app.listen() ```

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
## show information from database

## connect it to the client 

## HW
