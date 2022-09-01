import tap from 'tap'
import { toFarsiDigits } from './index.js'

tap.equal(toFarsiDigits(123), '۱۲۳')
tap.equal(toFarsiDigits(1.3), '۱٫۳')
tap.equal(toFarsiDigits(-1.3, { ignorePeriods: true }), '-۱.۳')
tap.equal(toFarsiDigits(0), 'صفر')
tap.equal(toFarsiDigits(0, { convertZeroToWord: false }), '۰')
tap.equal(toFarsiDigits(1000.1111), '۱٬۰۰۰٫۱۱۱۱')
tap.equal(toFarsiDigits(2n), '۲')
tap.equal(toFarsiDigits(1000, { separateDigits: false }), '۱۰۰۰')
