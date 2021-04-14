const char = x => x.charCodeAt(0);

const OFFSET = char('۱') - char('1');

/**
 * @param {number|bigint|string} number
 * @param {Object} options
 * @param {boolean=} options.ignorePeriods If true, periods are not converted to slashes. (default: false)
 * @param {boolean=} options.convertZeroToWord If true, returns صفر instead of ۰ (default: true)
 * @returns {string}
*/
export function toFarsiDigits(number, { ignorePeriods = false, convertZeroToWord = true } = {}) {
  const string = number.toString();
  // true if number is either 0 or '0' or 0n
  if (convertZeroToWord && string === '0') return 'صفر';
  return string
    .split('')
    .map(digit => {
      if (digit === '.') return ignorePeriods ? '.' : '٫';
      if (digit === '-') return '-';
      return String.fromCharCode(char(digit) + OFFSET);
    }).join('');
}
