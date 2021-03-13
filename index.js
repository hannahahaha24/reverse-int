module.exports = function reverse(num) {
    let res = parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

    if (num < 0) {
      res = -res;
    }

    return res;
  };
