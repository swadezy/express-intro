// give us ENTIRETY of express (NOT ./)
const express = require('express');

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// serve static files - HTML, CSS, JS, etc
app.use(express.static('server/public'));

// serve data
const people = ['Gabin', 'Josh', 'Joe'];
// get request / get route
app.get('/data', (req, res) => {
    console.log('you got to /data');
    // all server requests (req) need a response (res) or they will run forever
    res.send(people);
    
});

// START UP SERVER
app.listen(PORT, () =>  {
    // this will run when server starts
    console.log('server running on PORT', PORT);  
});
