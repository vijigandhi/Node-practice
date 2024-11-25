
### imported commands

`npm install`
`npm run server`
`npm install express`
`git init`
`git add .`
`git commit -m "msg"`
`git push origin master` 
`git push`


### database

mongoDB - NoSQL


### Mongoose Functions: 
Enable structured interaction with MongoDB collections, including CRUD operations and validation.


### schema
Defines the structure of the documents in a MongoDB collection.

Why it is used: It enforces a schema for your collection, enabling validations (required, unique) and data consistency.

#### model
Creates a model from a schema, linking it to a MongoDB collection.

Why it is used: The movie model provides an interface to interact with the movies collection 
(e.g., CRUD operations).

### find
Fetches all documents that match a query.

Why it is used: To retrieve all movies from the database.

### save
Saves a new document to the database.

Why it is used: To persist new movie data into the database.

### findById
Fetches a document by its unique _id.

Why it is used: To retrieve a specific movie by its ID.

### findByIdAnyUpdate
Finds a document by its _id and updates it. Returns the updated document if { new: true } is passed.

Why it is used: To update specific fields in an existing movie document and ensure data validation.

### deleteOne
Deletes a single document matching the query.

Why it is used: To remove a specific movie from the database.

### Express Functions:
Provide an easy way to define routes, process requests, and respond to clients. Together, these make the application modular and maintainable.

### app.use()
Middleware that processes requests before they reach route handlers.

Why it is used:
express.json(): Parses incoming JSON requests.
app.use('/movies', movieRoutes): Routes requests starting with /movies to the movieRoutes middleware.

### app.get()
Sets up a route handler for HTTP GET requests.

Why it is used: To define the base route (/) of the application.


### app.listen()
Starts the Express server and listens for incoming connections on the specified port.

Why it is used: To make the application accessible over HTTP.


### Express Router Functions:
router.get() / router.post() / router.put() / router.delete()
Define route handlers for specific HTTP methods.

Why it is used: To separate the logic for handling specific HTTP requests into modular handlers.