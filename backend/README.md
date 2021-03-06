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
$ npm run start:dev
```

## API available.

To Create User
http://localhost:3000/user - POST

```
{
    name : 'test user'
    phoneNumber: '012345689'
}
```

## GraphQL

Navigate to graphiql url on the browser. `http://localhost:3000/graphiql` and try out the queries
to get all the users, use the below query

1.  _To create new user_

```
mutation {
createUser(
        input:
            { name: "test", phoneNumber: "3434" }
        )
        {
            id,
            name,
            phoneNumber
        }
}
```

2.  _To update user details_

```
mutation {
    updateUser(
        input:
            { id: 1, name: "test_updated", phoneNumber: "34345" }
        )
        {
            id,
            name,
            phoneNumber
        }
}
```

3.  _To delete a user_

```
mutation {
    deleteUser(
        input:
            { id:1 }
    )
}
```

4.  _To get All Users_

```
{
getAllUsers {
    id
    name
    phoneNumber
    }
}
```

5.  _To get users by ID_

```
{
getUserById(id: 1) {
    id
    name
    phoneNumber
    }
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
