const char = x => x.charCodeAt(0);

const OFFSET = char('۱') - char('1');

/**
 * @param {number|string} number
 * @param {boolean} [ignorePeriods] If true, periods are not converted to slashes.
 * @returns {string}
*/
export default function convertToFarsiDigits(number, ignorePeriods = false) {
  return number.toString()
    .split('')
    .map(digit => {
      if (digit === '.') return ignorePeriods ? '.' : '٫';
      if (digit === '-') return '-';
      return String.fromCharCode(char(digit) + OFFSET);
    }).join('');
}
