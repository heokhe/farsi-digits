const char = x => x.charCodeAt(0);

const OFFSET = char('۱') - char('1');

/**
 * @param {number|string} number
 * @param {Object} options
 * @param {boolean=} options.ignorePeriods If true, periods are not converted to slashes. (default: false)
 * @param {boolean=} options.convertZeroToWord If true, returns صفر instead of ۰ (default: true)
 * @returns {string}
*/
export function toFarsiDigits(number, { ignorePeriods = false, convertZeroToWord = true } = {}) {
  if (convertZeroToWord && (number === 0 || number === '0')) return 'صفر';
  return number.toString()
    .split('')
    .map(digit => {
      if (digit === '.') return ignorePeriods ? '.' : '٫';
      if (digit === '-') return '-';
      return String.fromCharCode(char(digit) + OFFSET);
    }).join('');
}
