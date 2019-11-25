const express = require('express')
const path = require('path');

const app = express()
const port = 3000
var metrics = require('./metrics.js');



app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/view/consigne.html')))

app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})

app.get('/hello', (req, res) => res.sendFile(path.join(__dirname+'/view/hello.html')))




path.join(__dirname+'/index.html')


app.listen(port, () => console.log(`Example app listening on port ${port}!`))