const privateKeyText = document.querySelector('#privateKey')
const rawData = document.querySelector('#fromRaw')

const fetchOptions = {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  }
}
// step 1
document.querySelector('#getPrivateKey').addEventListener('submit', e => {
  e.preventDefault()
  const registerKey = document.querySelector('#registerKey').value
  const payload = {
    number: registerKey
  }

  privateKeyText.value = 'wait for getting a private key..'

  fetch('http://localhost:3000', {
      body: JSON.stringify(payload),
      ...fetchOptions
    }).then(res => res.json())
    .catch(err => {
      console.log(err)
      privateKeyText.value = 'failed'
    })
    .then(res => privateKeyText.value = res.privateKey)
})

document.querySelector('#encrypt').addEventListener('submit', e => {
  e.preventDefault()
  const encryptedText = document.querySelector('#encrypted')
  encryptedText.value = 'wait for getting a cipher'

  const payload = {
    raw: rawData.value,
    password: privateKeyText.value
  }

  fetch('http://localhost:4000/encrypt', {
      body: JSON.stringify(payload),
      ...fetchOptions
    }).then(res => res.json())
    .catch(err => console.log(err))
    .then(res => encryptedText.value = res.encrypted)
})

document.querySelector('#decrypt').addEventListener('submit', e => {
  e.preventDefault()

  const toRaw = document.querySelector('#toRaw')
  toRaw.value = 'decrypting..'

  const payload = {
    cipher: document.querySelector('#encrypted').value,
    password: privateKeyText.value
  }

  fetch('http://localhost:4000/decrypt', {
      body: JSON.stringify(payload),
      ...fetchOptions
    }).then(res => res.json())
    .catch(err => console.log(err))
    .then(res => toRaw.value = res.decrypted)
})
