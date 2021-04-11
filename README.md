# farsi-digits
Converts digits to Farsi digits, for example 1234 to ۱۲۳۴

## Installation
```sh
npm install farsi-digits
```

## Usage
```js
import { toFarsiDigits } from 'farsi-digits'

console.log(toFarsiDigits(1234)) // '۱۲۳۴'
console.log(toFarsiDigits(0)) // 'صفر'
console.log(toFarsiDigits(0, { convertZeroToWord: false })) // '۰'
console.log(toFarsiDigits(1.2)) // '۱٫۲'
console.log(toFarsiDigits(1.2, { ignorePeriods: true })) // '۱.۲'
```