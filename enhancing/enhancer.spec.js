const enhancer = require("./enhancer.js");
// test away!

const { succeed, fail, repair } = enhancer;

const box = {
  name: "Box",
  durability: 10,
  enhancement: 12
};

const ball = {
  name: "Ball",
  durability: 10,
  enhancement: 20
};

const kite = {
    name: "Kite",
    durability: 50,
    enhancement: 15
  };

describe("succeed", () => {
  it("should increment enhancement if < 20", () => {
    expect(succeed(box)).toHaveProperty("enhancement", 13);
  });

 
});


describe("repair", () => {
  it("should return 100 for durability", () => {
    expect(repair(kite)).toHaveProperty("durability", 100);
  });

});