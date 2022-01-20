# Shopify-Backend

**Requirements**

. Javascript

. Node.js and Express.js

. Postgres Database

. React for UI

. Redux for store


**GitHub**

Fork this repo to your own Github account. Then git clone your forked repo to your local machine by typing git clone in Terminal/ Command Prompt. cd into the folder

https://github.com/nelasunitha/Shopify-Backend

**Installing dependencies**

npm install to install dependencies from package.json

**How to Seed**

For convenience seeded some dummy data for the details mentioned in assessment,

create table **'books'**  using command createdb books in terminal.

npm run seed

![alt text](./postgres image.png)

The image can be viewed in postgres image.png under RRADME.md file

**How to Start**

npm start or node index.js

**Functionality**
User can view all the books available when they click on AllBooks

GET request -  URL  http://localhost:3000/api/books
Response GET /localhost:3000/api/books  ---- 200

To see the response I Used Postman API platform for building and using API's.

Can download at https://www.postman.com/downloads/



``` json
 {
        "id": 1,
        "name": "Pride and Prejudice",
        "author": " Jane Austen",
        "genre": "Romance",
        "publishedYear": 1813,
        "price": "16.83",

    },
    {
        "id": 3
    }
    ```
    .......

Post Request URL  http://localhost:3000/api/books
Response Post /localhost:3000/api/books  ---- 200

**RESTful API's**

Adding Book -  POST Request  - URL  http://localhost:3000/api/users

Response POST /api/users  ----- 200
```{
    "id": 23,
    "name": "Mockingbird",
    "author": " Harper Lee",
    "genre": "Gothic",
    "publishedYear": 1960,
    "price": "24.99",
}
```



Response PUT http://localhost:3000/api/books/22------ 200

updating the details of a specific book


``` json
[
    {
    "id": 22,
    "name": "Mockingbird",
    "author": " Sunitha",
    "genre": "Gothic",
    "publishedYear": 1960,
}
```
Delete request http://localhost:3000/api/books/22

Response 200;
 To delete the specific book

 UI is also buit for the convinence

Need to refresh in UI after adding, updating and deleting to check for the results


**Improvements for future**

Currently user can upload and delete individual files, not bulk files
To view the results without refreshing UI
Giving Authorization
Fiterring Books by 'genre', 'authorname'
