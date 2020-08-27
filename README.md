# BFastDatabase Exmplae

This example show how to start a bfast-database server

# Pre Request
You need to have a mongodb url either remote or locally.

# Get Start

* clone repository `git clone https://github.com/fahamutech/bfast-database-example.git`

* navigate to folder `cd bfast-database-example`

* install dependencies `npm install`

* start server `npm start`

Change configuration of your server by change content of `app.js` file 

```javascript
const {BFastDatabase} = require('bfast-database');

new BFastDatabase().start({
    applicationId: 'daas', // give your bfast database server app id
    masterKey: 'daas', // your super admin password to override some restriction
    mongoDbUri: 'mongodb://localhost/daas', // your mongodb server
    port: '5000', // port to serve your request
    mountPath: '/', // mount http endpoint
}).catch(console.log);
```
