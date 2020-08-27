const {BFastDatabase} = require('bfast-database');

new BFastDatabase().start({
    applicationId: 'daas',
    masterKey: 'daas',
    mongoDbUri: 'mongodb://localhost/daas',
    port: '5000',
    mountPath: '/',
    adapters: {}
}).catch(console.log);

