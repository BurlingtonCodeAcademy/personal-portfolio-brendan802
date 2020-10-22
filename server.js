//imports
const express = require('express');
const path =require ('path');
//global variables
const app =express()
const port = process.env.PORT || 5000

app.use(express.static(path.resolve('./client/build')))

app.get('*', (request, response) => {
    response.sendFile(path.resolve('.client/build/index.html'))
})

//server start/console log
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})