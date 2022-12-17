type Point = {
  x: number;
  y: number;
};

type PointTwo = Point & { z: number };

const test: PointTwo = { x: 1, y: 2, z: 3 };

console.log(test);
