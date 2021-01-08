# farsi-digits
Converts digits to Farsi digits, for example 1234 to ۱۲۳۴

## Installation
```sh
npm install farsi-digits
```

## Usage
```js
import convertToFarsiDigits from 'farsi-digits'

console.log(convertToFarsiDigits(1234)) // '۱۲۳۴'
console.log(convertToFarsiDigits('سلام سلام 1300 تا سلام')) // 'سلام سلام ۱۳۰۰ تا سلام'
```