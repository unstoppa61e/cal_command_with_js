'use strict'

{
  class MonthYearLine {
    constructor(date) {
      this.data = this.makeMonthYearLine(date)
    }

    makeMonthYearLine(date) {
      const head_spaces = this.makeHeadSpaces(date)
      const month_year_str = this.makeMonthYearStr(date)
      return require('printf')('% -22s', head_spaces + month_year_str)
    }

    makeMonthYearStr(date) {
      return `${date.month}月 ${date.year}`
    }

    calcHeadSpaces(date) {
      const yearLen = date.year.toString().length
      const monthLen = date.month.toString().length
      return Math.ceil((17 - (yearLen + monthLen)) / 2)
    }

    makeHeadSpaces(year, month) {
      return ' '.repeat(this.calcHeadSpaces(year, month))
    }
  }

  class getDate {
    constructor() {
      const date = new Date()
      const argv = require('minimist')(process.argv.slice(2))
      this.year = this.getYear(date, argv)
      this.month = this.getMonth(date, argv)
    }

    getYear(date, argv) {
      return this.isUndefined(argv.y) ? date.getFullYear() : parseInt(argv.y)
    }

    getMonth(date, argv) {
      return this.isUndefined(argv.m) ? date.getMonth() + 1 : parseInt(argv.m)
    }

    isUndefined(x) {
      return typeof x === 'undefined'
    }
  }

  // class DaysOfWeek {
  //   constructor() {
  //     this.data = ''
  //   }
  //
  // }

  // const isUndefined = x => typeof x === "undefined"
  // function getDate () {
  //   const year = isUndefined(argv.y) ? date.getFullYear() : parseInt(argv.y)
  //   const month = isUndefined(argv.m) ? date.getMonth() + 1 : parseInt(argv.m)
  //   return {year: year, month: month}
  // }

  module.exports = {getDate: getDate, MonthYearLine: MonthYearLine}
}




function main() {
  // const date = getDate()
  // const h = makeMonthYearLine(date)
  console.log(h)
}
