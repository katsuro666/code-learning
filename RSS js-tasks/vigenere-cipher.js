/* Your task is to implement the class VigenereCipheringMachine. constructor of this class accepts true (or nothing) to create direct machine and false to create reverse machine. Each instance of VigenereCipheringMachine must have 2 methods: encrypt and decrypt.

encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).

decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).

These parameters for both methods are mandatory. If at least one of them has not been given, an Error with message Incorrect arguments! must be thrown. The text returned by these methods must be uppercase. Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).
You don't need to validate value sent to constructor and to encrypt and decrypt methods (except throwing an Error on absence of argument for these methods).

For example:

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'

directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'

reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'

reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA' */

class VigenereCipheringMachine {
  constructor(arg) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (arg === false) {
      this.mode = 'reverse'
    } else {
      this.mode = 'direct'
    }
  }
  
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }    
    let result = ''
    let symbols = 0
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i].toUpperCase())) {
        let messageEnc = this.alphabet.indexOf(message[i].toUpperCase())
        let keyFit = (i >= key.length) ? key[(i - symbols) % key.length]
                                       : key[i - symbols]
        let keyEnc = this.alphabet.indexOf(keyFit.toUpperCase())
        let encryptMessage = this.alphabet[(this.alphabet.length + (messageEnc + keyEnc)) % this.alphabet.length]
        result = `${result}${encryptMessage}`
      } else {
        symbols++
        result = `${result}${message[i]}`
      }
    }

    if (this.mode === 'reverse') {
      return result.split('').reverse().join('')
    } return result
    
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }    
    let result = ''
    let symbols = 0
    
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let messageDec = this.alphabet.indexOf(message[i])
        let keyFit = (i >= key.length)  ? key[(i - symbols) % key.length]
                                        : key[i - symbols]
        let keyDec = this.alphabet.indexOf(keyFit.toUpperCase())
        let decryptMessage = this.alphabet[(this.alphabet.length + (messageDec - keyDec)) % this.alphabet.length]
        result = `${result}${decryptMessage}`
      } else {
        symbols++
        result = `${result}${message[i]}`
      }
    }

    if (this.mode === 'reverse') {
      return result.split('').reverse().join('')
    } return result
  }
}