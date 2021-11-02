const { execSync } = require('child_process')

describe('makeMonthYearLine()', () => {
  const {makeMonthYearLine, get_date} = require('./calendar');

  describe('without arguments', () => {
    test('returns the current month and year', () => {
      const stdout = execSync('cal')
      const monthYearLine = stdout.toString().split("\n")[0]
      const date = get_date()
      expect(makeMonthYearLine(date)).toBe(monthYearLine);
    })
  })

  describe('with arguments "-m 1"', () => {
    test('returns "1月 XXXX(= the current year)"', () => {
      const stdout = execSync('cal -m 1')
      const monthYearLine = stdout.toString().split("\n")[0]
      const date = get_date()
      date.month = 1
      expect(makeMonthYearLine(date)).toBe(monthYearLine);
    })
  })
})
