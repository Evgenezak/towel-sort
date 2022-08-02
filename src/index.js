
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (matrix == ''){
    return []
}
if (typeof matrix === "undefined") {
    matrix = [];
  }
return matrix.reduce((accumulator, current, i) => {
  return accumulator.concat((!(i % 2) ? current : current.reverse()));
}, [])

}