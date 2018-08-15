const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.argv[2] || 3000

const {
  db
} = require('./util/db')

const {
  encrypt,
  decrypt,
  generateKeyPair
} = require('./util/encrypt')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// encrypt
app.post('/', (req, res, next) => {
  const number = req.body.number
  if (!number) {
    res.json({
      result: 'failed'
    })
    return
  }

  const keyPair = generateKeyPair()
  const encrypted = encrypt(number, keyPair.public)
  db[number] = encrypted
  console.log(new Date(), encrypted)

  res.json({
    privateKey: encrypted
  })
})

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
