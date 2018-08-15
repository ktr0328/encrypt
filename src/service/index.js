const express = require('express')
const path = require('path')
const app = express()
const PORT = process.argv[2] || 4000

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
