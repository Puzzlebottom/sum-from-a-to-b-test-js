
const sum = (fromN, toN) => fromN === toN ? fromN : sum(fromN + 1, toN) + fromN;

module.exports = sum;
