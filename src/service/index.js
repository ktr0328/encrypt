const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.argv[2] || 4000
const {
  encrypt,
  decrypt
} = require('./util/encrypt')


app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.post('/encrypt', (req, res, next) => {
  const {
    raw,
    password
  } = req.body
  const encrypted = encrypt(raw, password)

  res.json({
    encrypted
  })
})

app.post('/decrypt', (req, res, next) => {
  const {
    cipher,
    password
  } = req.body
  const decrypted = decrypt(cipher, password)

  res.json({
    decrypted
  })
})

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
