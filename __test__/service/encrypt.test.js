const {
  encrypt,
  decrypt
} = require('../../src/service/util/encrypt')

test('encrypt => decrypt', () => {
  const rawData = 'TestText'
  const password = 'password'

  const encrypted = encrypt(rawData, password)

  const decrypted = decrypt(encrypted, password)

  expect(decrypted).toBe(rawData)
})
