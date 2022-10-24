# Assignment
## Frameworks Used:
- Angular 14
- Node.Js
- Express
- My SQL

## Folder Structure of Server


📦src
 ┣ 📂configs
 ┃ ┗ 📜db.config.js         --config file that holds db and other configeration.
 ┣ 📂middlewares
 ┃ ┣ 📜errorLogger.js       --script to log errors that occure in backend.
 ┃ ┗ 📜requestLogger.js     --script to log requests that come to backend.
 ┣ 📂routes
 ┃ ┗ 📜routing.js           --route file that handled allendpoints.
 ┣ 📂services
 ┃ ┗ 📜languageServices.js  --services file that has bussiness logics of get put post and delete.
 ┣ 📂utilities
 ┃ ┗ 📜utilities.js         --utilities like connecting to server and pagination of response.
 ┣ 📜app.js                 --server app.
 ┣ 📜errorLogger.txt        --generated error logs from middleware.
 ┗ 📜requestLogger.txt      --generated request logs from middleware.


## Project setup
> git clone https://github.com/jeevottamlokurti/Assignment.git
### Node.js Server

#### Moving to project folder
> cd Assignment/src

#### Installing backend dependencies
> npm i

#### Running Backend Server
> node app.js

##### Usage:
#### GET
> Get a specific page response from api "localhost:8080/languages/?page=1".
##### POST
> Creat a data entry in backend using api "localhost:8080/languages" where as data is passed as a post payload.
##### PUT
> Update a data entry into backend using api "localhost:8080/languages/2" where 2 is the id of data instance and update data can be sent through payload.
##### DELETE
> Delete a data entry from backend using api "localhost:8080/languages/2" where 2 is the id of data instance and that specific data is deleted.

### Angular Client

#### Moving to frontend project folder
> cd webapp

#### Installing frontend dependencies
> npm i

#### Running Frontend Server
>  ng serve

> Navigate to http://localhost:4200/.
