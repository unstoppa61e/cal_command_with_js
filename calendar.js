'use strict'

// {
//
// }
// class MonthYearLine {
//   constructor(date) {
//     this.data = makeMonthYearLine(date)
//   }
// }
function makeMonthYearLine(date) {
  const head_spaces = makeHeadSpaces(date)
  const month_year_str = makeMonthYearStr(date)
  return require('printf')('% -22s', head_spaces + month_year_str)
}

function makeMonthYearStr(date) {
  return `${date.month}月 ${date.year}`
}

function calcHeadSpaces(date) {
  const yearLen = date.year.toString().length
  const monthLen = date.month.toString().length
  return Math.ceil((17 - (yearLen + monthLen)) / 2)
}

function makeHeadSpaces(year, month) {
  return ' '.repeat(calcHeadSpaces(year, month))
}

const isUndefined = x => typeof x === "undefined"

function getDate () {
  const argv = require('minimist')(process.argv.slice(2))
  const d = new Date()
  const year = isUndefined(argv.y) ? d.getFullYear() : parseInt(argv.y)
  const month = isUndefined(argv.m) ? d.getMonth() + 1 : parseInt(argv.m)
  return {year: year, month: month}
}

function main() {
  const date = getDate()
  const h = makeMonthYearLine(date)
  console.log(h)
}

module.exports = {makeMonthYearLine: makeMonthYearLine, get_date: getDate}
