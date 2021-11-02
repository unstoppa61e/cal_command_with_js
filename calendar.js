'use strict'

{
  class MonthYearLine {
    constructor (date) {
      this.data = this.makeMonthYearLine(date)
    }

    makeMonthYearLine (date) {
      const lineLength = 22
      const headSpaces = this.makeHeadSpaces(date)
      const monthYearStr = this.makeMonthYearStr(date)
      const tailSpaces = ' '.repeat(lineLength - (headSpaces + monthYearStr).length)
      return headSpaces + monthYearStr + tailSpaces
    }

    makeMonthYearStr (date) {
      return `${date.month}月 ${date.year}`
    }

    calcHeadSpaces (date) {
      const yearLen = date.year.toString().length
      const monthLen = date.month.toString().length
      return Math.ceil((17 - (yearLen + monthLen)) / 2)
    }

    makeHeadSpaces (year, month) {
      return ' '.repeat(this.calcHeadSpaces(year, month))
    }
  }

  class GetDate {
    constructor () {
      const date = new Date()
      const argv = require('minimist')(process.argv.slice(2))
      this.year = this.getYear(date, argv)
      this.month = this.getMonth(date, argv)
    }

    getYear (date, argv) {
      return this.isUndefined(argv.y) ? date.getFullYear() : parseInt(argv.y)
    }

    getMonth (date, argv) {
      return this.isUndefined(argv.m) ? date.getMonth() + 1 : parseInt(argv.m)
    }

    isUndefined (x) {
      return typeof x === 'undefined'
    }
  }

  class DaysOfWeekLine {
    constructor () {
      this.data = '日 月 火 水 木 金 土  '
    }
  }

  class DatesBlock {
    constructor (yearMonth) {
      this.data = this.makeDatesBlock(yearMonth)
    }

    makeDatesBlock (yearMonth) {
      const datesStrs = this.getDatesStrs(yearMonth)
      const weeksStrs = this.makeWeeksStrs(datesStrs)
      return weeksStrs.join('\n')
    }

    makeWeeksStrs (datesStrs) {
      const weeksStrs = []
      for (let i = 0; i < 6; i++) {
        const weekHeadIndex = i * 7
        const weekStr = datesStrs.slice(weekHeadIndex, weekHeadIndex + 7).join(' ')
        weeksStrs.push(weekStr + ' '.repeat((2)))
      }
      return weeksStrs
    }

    getDatesStrs (yearMonth) {
      const datesStrs = []
      const date = this.getFirstDay(yearMonth)
      for (let i = 0; i < date.getDay(); i++) {
        datesStrs.push(' '.repeat(2))
      }
      for (; date.getMonth() + 1 === yearMonth.month; date.setDate(date.getDate() + 1)) {
        const dateStr = date.getDate().toString()
        datesStrs.push(' '.repeat(2 - dateStr.length) + dateStr)
      }
      while (datesStrs.length < 7 * 6) {
        datesStrs.push(' '.repeat(2))
      }
      return datesStrs
    }

    getFirstDay (yearMonth) {
      const date = new Date()
      date.setFullYear(yearMonth.year)
      date.setMonth(yearMonth.month - 1)
      date.setDate(1)
      return date
    }
  }

  class Calendar {
    show () {
      console.log(this.makeCalendar())
    }

    makeCalendar () {
      const date = new GetDate()
      const monthYearLine = new MonthYearLine(date)
      const daysOfWeekLine = new DaysOfWeekLine()
      const datesBlock = new DatesBlock(date)
      return [monthYearLine, daysOfWeekLine, datesBlock].map(block => block.data).join('\n')
    }
  }

  const calendar = new Calendar()
  calendar.show()

  module.exports = { GetDate: GetDate, MonthYearLine: MonthYearLine, DaysOfWeek: DaysOfWeekLine, DatesBlock: DatesBlock, Calendar: Calendar }
}
