
function calendar(a, b) {
  return a + b;
}

module.exports = calendar;

function make_month_year_line(year, month) {
  const head_spaces = make_head_spaces(year, month)
  const month_year_str = make_month_year_str(year, month)
  return require('printf')('% -22s', head_spaces + month_year_str)
}

function make_month_year_str(year, month) {
  return `${month}月 ${year}`
}

function calc_head_spaces(year, month) {
  const year_len = year.toString().length
  const month_len = month.toString().length
  return Math.ceil((17 - (year_len + month_len)) / 2)
}

function make_head_spaces(year, month) {
  return ' '.repeat(calc_head_spaces(year, month))
}

function main() {
  const d = new Date()
  const h = make_month_year_line(d.getFullYear(), d.getMonth())
  console.log(h)
}

main()

// console.log(require('sprintf-js').sprintf('% 201$s', 'hoge'))
// console.log(require('printf')('%s', 'hoge'))
