# react16.13.1-hooks-middleware

This project was generated with Create React App version 3.4.1.

(Nowadays, npx is recommended indstead of create-react-app.)

## Description

This project aims to compare custom hooks and Redux in using the following middlewares:

* redux-thunk
* redux-saga
* redux-observable

## Database and API

First of all, MongoDB setting is necessary.
Then, start this.

```
sudo mongod -dbpath /usr/local/var/mongodb
```

Run ```node app/app.js``` under 'server' directory. Navigate to http://127.0.0.1:8080/.

## Development server

Run ```npm start``` for a dev server at root directory. 

Navigate to http://127.0.0.1:3000/. The app will automatically reload if you change any of the source files.

## Author

okapie
