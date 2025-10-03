Reflection

Install dependencies (npm):

"cors": "^2.8.5"

"dotenv": "^17.2.3"

"express": "^5.1.0"

"mongodb": "^6.20.0"

"mongoose": "^8.18.3"

Mongoose

Connection to MongoDB using the mongoose.connect() function, which connects the server with the database.

productSchema

Defines a schema for products — a structure describing the data stored in MongoDB.

Each product object includes:

name

price

description

category

GET request

A GET request (HTTP GET method) to the root path of the server (/).

Returns a message: "Hello, server is working!".

Product

Acts as a bridge between the Node.js application and the products collection in MongoDB.

app.get("/products")

GET request to fetch all products from the database.

POST method

Allows adding a new product into the products array inside an existing document using its _id.

Uses the MongoDB $push operator to insert the new item into the array.

app.post("/products")

Receives data from the client, creates a new product object, and saves it to the database using .save().

app.patch("/product/:docid/:productId")

Updates an existing document in the database.

Finds a document by its _id and locates a specific product inside the products array by its id.

Updates the product’s fields (e.g., adding category).

.env file

Used to store environment variables like MONGO_URL.

Keeps sensitive information such as database credentials outside of the code for security.

Helps make the project configuration flexible without changing the source code.
