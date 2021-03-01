
// You should implement your task here.
function checkArray(array) {
    return array instanceof Array && array.length != 0;
}

module.exports = function towelSort (matrix) {
    return checkArray(matrix) ? [].concat.apply([], matrix.map((array, i) => i%2 ? array.reverse() : array)) : [];
}
