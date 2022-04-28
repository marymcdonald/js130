function Triangle (side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    throw new Error ('Not a valid triangle. All sides must be of length > 0');
  } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3
    <= side1) {
    throw new Error ('Not a valid triangle. The sum of the lengths of any two sides must be greater than the length of the third side.');
  }
  console.log(side1 + side2 < side3);
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.kind = function() {
  let numSidesEqual = () => {
    let sidesAB = this.side1 === this.side2 ? 1 : 0;
    let sidesAC = this.side1 === this.side3 ? 1 : 0;
    let sidesBC = this.side2 === this.side3 ? 1 : 0;

    return sidesAB + sidesAC + sidesBC;
  };

  if (numSidesEqual() === 3) {
    return 'equilateral';
  } else if (numSidesEqual() === 1) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

module.exports = Triangle;
// const triangle = new Triangle(1, 1, 2);
// console.log(triangle.kind());