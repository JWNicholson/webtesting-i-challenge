const enhancer = require('./enhancer.js');
// test away!
const { repair } = enhancer;

const box = {
    name: "Box",
    durability:10,
    enhancement:12
};

describe("repair", () => {
    it("should return 100 for durability", () => {
      expect(repair(box)).toHaveProperty("durability", 100);
    });
  });

