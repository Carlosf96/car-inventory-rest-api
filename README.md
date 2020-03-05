# BSA

> BSACRUD

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

It also uses [Feathers-memory](https://github.com/feathersjs-ecosystem/feathers-memory).
It is a Feathers service adapter for in-memory data storage that works on all platforms, so there is no need to set a DB server.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/BSA
   npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Usage

To make querys to the database you can use the HTTP Methods: GET, PUT, POST, DELETE, PATCH.

for e.g:

```To get all cars
GET localhost:3030/cars
GET localhost:3030/cars?query
PUT localhost:3030/cars?query
POST localhost:3030/cars?query
DELETE localhost:3030/cars?query
PATCH localhost:3030/cars?query
```

Where `?query` is your query paramaters, such as:

```
GET localhost:3030/cars/?make=Cadillac
GET localhost:3030/cars/?make=Cadillac&model=STS
```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
