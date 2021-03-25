const express = require('express');

const app = express()


app.get('/', function (req, res) {
    res.send('hello world and thank you for calling me')
  })
  
  app.listen(4001, () => console.log('listening to port 4001'))