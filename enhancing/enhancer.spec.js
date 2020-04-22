const enhancer = require("./enhancer.js");
// test away!

const { succeed, fail, repair, get } = enhancer;

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
    durability: 55,
    enhancement: 15
  };

  const stick = {
      name: "Stick",
      durability: 90,
      enhancement: 0
  }

describe("succeed", () => {
  it("should increment enhancement if < 20", () => {
    expect(succeed(box)).toHaveProperty("enhancement", 14);
  });

  it("enhancement should not change if >= 20", () => {
      expect(succeed(ball)).toHaveProperty("enhancement", 20);
  });
 
  it("durability should not change", () => {
      expect(succeed(ball)).toHaveProperty("durability", 10);
  });

});


describe("fail", () => {
    it("if enhancement < 15, decrease durability by 5 and decrease enhancement", () => {
        expect(fail(kite)).toHaveProperty("durability", 45);
        expect(fail(kite)).toHaveProperty("enhancement", 14);
    });

    it("if enhancemente < 15 decrease durability by 5", () => {
        expect(fail(box)).toHaveProperty("durability", 5);
    });
});


describe("repair", () => {
  it("should return 100 for durability", () => {
    expect(repair(kite)).toHaveProperty("durability", 100);
  });

});

describe("get", () => {
    it("should return same name if enhancement === 0", () => {
        expect(get(stick)).toHaveProperty("name", "Stick");
    });

    it("should return modified name if enhancement > 0", () => {
        expect(get(box)).toHaveProperty("name", "12 + Box");
      });
   
});