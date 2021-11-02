const { execSync } = require('child_process')

describe('makeMonthYearLine()', () => {
  const {getDate, MonthYearLine} = require('./calendar');

  describe('without arguments', () => {
    test('returns the current month and year', () => {
      const stdout = execSync('cal')
      const monthYearLine = stdout.toString().split("\n")[0]
      const date = new getDate()
      expect(new MonthYearLine(date).data).toBe(monthYearLine);
    })
  })

  describe('with arguments "-m 1"', () => {
    test('returns "1月 YYYY(= the current year)"', () => {
      const stdout = execSync('cal -m 1')
      const monthYearLine = stdout.toString().split("\n")[0]
      const date = new getDate()
      date.month = 1
      expect(new MonthYearLine(date).data).toBe(monthYearLine);
    })
  })
})
