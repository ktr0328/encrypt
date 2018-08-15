const keypair = require("keypair")
const crypto = require("crypto")

const encrypt = (raw, publicKey) => {
  const encrypted = crypto.publicEncrypt(publicKey, new Buffer(raw))
  return encrypted.toString("base64")
}

const decrypt = (encrypted, privateKey) => {
  const decrypted = crypto.privateDecrypt(
    privateKey,
    new Buffer(encrypted, "base64")
  )
  return decrypted.toString("utf8")
}

const generateKeyPair = () => {
  return keypair()
}

module.exports = {
  encrypt,
  decrypt,
  generateKeyPair
}
