const crypto = require('crypto')

const algorithm = 'aes192'
const rawEncoding = 'utf8'
const encryptedEncoding = 'hex'

const encrypt = (raw, password) => {
  let cipher = crypto.createCipher(algorithm, password)
  cipher.update(raw, rawEncoding, encryptedEncoding)

  return cipher.final(encryptedEncoding)
}

const decrypt = (ciphered, password) => {
  let decipher = crypto.createDecipher(algorithm, password)
  decipher.update(ciphered, encryptedEncoding, rawEncoding)

  return decipher.final(rawEncoding)
}

module.exports = {
  encrypt,
  decrypt
}
