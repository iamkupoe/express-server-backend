const express = require('express');

const server = express();

const handleAllTypesOfRequest = (req, res) => {
  res.send('Response from server.use');
}
const handleProfilePutRequestTypes = (req, res) => {
    res.send('This is the Profile page.');
}
const handleLoginRequestTypes = (req, res) => {
    res.send('This the login page');
}
const handleSignupRequest = (req, res) => {
   res.send('Please signup with us!');
}
server.get('/profile', handleAllTypesOfRequest);
server.put('/profile', handleProfilePutRequestTypes);
server.post('/login', handleLoginRequestTypes);
server.patch('/signup', handleSignupRequest);
server.patch('/login', handleLoginRequestTypes);

server.listen('5000',() => console.log('Server is ready') );