# project

## Description

sample-project-using-type-sript

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ . ./run-locally.sh

##API available.
Create User
http://localhost:3000/user - POST
```

{
name : String
phoneNumber: String
}

```
To Login
`http://localhost:3000/login`

## GraphQl

Navigate to graphiql api. `http://localhost:3000/graphiql` and try out the queries
to get all the users, use the below query
```

{
getAllUsers {
id
name
phoneNumber
}
}

```
to get users by ID, use the below query
```

{
getUserById(id: 1) {
id
name
phoneNumber
}
}

````
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
````
