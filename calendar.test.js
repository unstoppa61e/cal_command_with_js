const { execSync } = require('child_process')
const { GetDate, MonthYearLine, DaysOfWeek: DaysOfWeekLine, DatesBlock } = require('./calendar')
function toZsh (str) {
  const lines = str.split('\n')
  return lines.slice(0, lines.length - 1).join('\n')
}

describe('makeMonthYearLine', () => {
  describe('without arguments', () => {
    test('returns the current month and year', () => {
      const stdout = execSync('cal')
      const monthYearLine = stdout.toString().split('\n')[0]
      const date = new GetDate()
      expect(new MonthYearLine(date).data).toBe(monthYearLine)
    })
  })

  describe('with arguments "-m 1"', () => {
    test('returns "1月 YYYY(= the current year)"', () => {
      const stdout = execSync('cal -m 1')
      const monthYearLine = stdout.toString().split('\n')[0]
      const date = new GetDate()
      date.month = 1
      expect(new MonthYearLine(date).data).toBe(monthYearLine)
    })
  })
})

describe('DaysOfWeek', () => {
  test('returns "日 月 火 水 木 金 土  "', () => {
    expect(new DaysOfWeekLine().data).toBe('日 月 火 水 木 金 土  ')
  })
})

describe('DatesBlock', () => {
  describe('when arguments are "-m 1"', () => {
    test('returns the block of the current month', () => {
      const stdout = execSync('cal -m 1')
      const datesBlock = toZsh(stdout.toString().split('\n').slice(2).join('\n'))
      const date = new GetDate()
      date.month = 1
      expect(new DatesBlock(date).data).toBe(datesBlock)
    })
  })

  describe('when arguments are "-m 2"', () => {
    test('returns the block of the current month', () => {
      const stdout = execSync('cal -m 2')
      const datesBlock = toZsh(stdout.toString().split('\n').slice(2).join('\n'))
      const date = new GetDate()
      date.month = 2
      expect(new DatesBlock(date).data).toBe(datesBlock)
    })
  })

  describe('when arguments are "-m 3"', () => {
    test('returns the block of the current month', () => {
      const stdout = execSync('cal -m 3')
      const datesBlock = toZsh(stdout.toString().split('\n').slice(2).join('\n'))
      const date = new GetDate()
      date.month = 3
      expect(new DatesBlock(date).data).toBe(datesBlock)
    })
  })

  describe('when arguments are "-m 4"', () => {
    test('returns the block of the current month', () => {
      const stdout = execSync('cal -m 4')
      const datesBlock = toZsh(stdout.toString().split('\n').slice(2).join('\n'))
      const date = new GetDate()
      date.month = 4
      expect(new DatesBlock(date).data).toBe(datesBlock)
    })
  })

  describe('when arguments are "-m 5"', () => {
    test('returns the block of the current month', () => {
      const stdout = execSync('cal -m 5')
      const datesBlock = toZsh(stdout.toString().split('\n').slice(2).join('\n'))
      const date = new GetDate()
      date.month = 5
      expect(new DatesBlock(date).data).toBe(datesBlock)
    })
  })
})

describe('Calendar', () => {

})
