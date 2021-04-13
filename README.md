# farsi-digits
Converts digits to Farsi digits, for example 1234 to ۱۲۳۴

## Installation
```sh
npm install farsi-digits
```

## Usage
```js
import { toFarsiDigits } from 'farsi-digits'

toFarsiDigits(1234) // '۱۲۳۴'
toFarsiDigits('1234') // '۱۲۳۴'

// It also supports bigints
toFarsiDigits(1234567890n) // '۱۲۳۴۵۶۷۸۹۰'

toFarsiDigits(0) // 'صفر'
toFarsiDigits(0, { convertZeroToWord: false }) // '۰'

toFarsiDigits(1.2) // '۱٫۲'
toFarsiDigits(1.2, { ignorePeriods: true }) // '۱.۲'
```