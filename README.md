# farsi-digits
Converts digits to Farsi digits, for example 123 to ۱۲۳

## Installation
```sh
npm install farsi-digits
```

## Usage
```js
import { toFarsiDigits } from 'farsi-digits'

toFarsiDigits(123) // '۱۲۳'
toFarsiDigits(25000) // '۲۵٬۰۰۰'
toFarsiDigits(25000, { separateDigits: false }) // '۲۵۰۰۰'

// Also supports bigints
toFarsiDigits(2n) // '۲'

toFarsiDigits(0) // 'صفر'
toFarsiDigits(0, { convertZeroToWord: false }) // '۰'

toFarsiDigits(1.2) // '۱٫۲'
toFarsiDigits(1.2, { ignorePeriods: true }) // '۱.۲'
```
