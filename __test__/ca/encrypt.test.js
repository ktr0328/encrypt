const {
  encrypt,
  decrypt,
  generateKeyPair
} = require('../../src/ca/util/encrypt')

test('encryption raw data', () => {
  expect(encrypt('暗号化するべ', generateKeyPair().public)).toMatch(/.{67}/)
})

test('decrypt encrypted data to raw data', () => {
  const keys = generateKeyPair()
  const encrypted = encrypt('暗号化するべ', keys.public)
  const raw = decrypt(encrypted, keys.private)
  expect(raw).toBe('暗号化するべ')
})
