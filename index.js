const farsiDigits = [...'۰۱۲۳۴۵۶۷۸۹']

/**
 * @param {number|bigint} number
 * @param {Object} options
 * @param {boolean=} options.ignorePeriods If true, periods are not converted to slashes. (default: false)
 * @param {boolean=} options.convertZeroToWord If true, returns صفر instead of ۰ (default: true)
 * @param {boolean=} options.separateDigits Separate every 3 digits (default: true)
 * @returns {string}
*/
export function toFarsiDigits(number, {
  ignorePeriods = false,
  convertZeroToWord = true,
  separateDigits = true,
} = {}) {
  let string = number.toString();

  // the minus can mess things up when separating digits so we'll get to it later
  const isNegative = string.startsWith('-')
  if (isNegative) string = string.slice(1)

  // true if number is either 0 or '0' or 0n
  if (convertZeroToWord && string === '0') return 'صفر';

  // replace the digits
  string = string.split('').map(c => c === '.' ? c : farsiDigits[parseInt(c)]).join('')

  // necessary because the digit separation logic has to take effect only in the "integer" part of the number
  let [intPart, decimalPart] = string.split('.', 2)
  if (separateDigits) {
    intPart = intPart
      .split('').reverse().join('') // reverse all
      .split(/(.{3})/).filter(Boolean).join('٬') // separate every 3 characters
      .split('').reverse().join('') // reverse again
  }

  return `${isNegative ? '-' : ''}${decimalPart ? `${intPart}${ignorePeriods ? '.' : '٫'}${decimalPart}` : intPart}`
}
