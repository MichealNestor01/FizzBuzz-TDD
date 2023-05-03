import { fizzbuzz } from "../src/fizzbuzz.js";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("fizzbuzz", () => {
  it("should return 1 from input 1", () => {
    const returnVal = fizzbuzz(1);
    expect(returnVal).to.equal(1);
  });

  it("should return 2 from input 2", () => {
    const returnVal = fizzbuzz(2);
    expect(returnVal).to.equal(2);
  });

  it("should return Fizz from input 3", () => {
    const returnVal = fizzbuzz(3);
    expect(returnVal).to.equal("Fizz");
  });

  it("should return Fizz from input multiple of 3", () => {
    for (let i = 3; i < 30; i *= 3) {
      const returnVal = fizzbuzz(i);
      expect(returnVal).to.equal("Fizz");
    }
  });

  it("should return 4 from input 4", () => {
    const returnVal = fizzbuzz(4);
    expect(returnVal).to.equal(4);
  });

  it("should return Buzz from input 5", () => {
    const returnVal = fizzbuzz(5);
    expect(returnVal).to.equal("Buzz");
  });

  it("should return Buzz from input multiple of 5", () => {
    for (let i = 5; i < 50; i *= 5) {
      const returnVal = fizzbuzz(i);
      expect(returnVal).to.equal("Buzz");
    }
  });

  it("should return FizzBuzz from input 15", () => {
    const returnVal = fizzbuzz(15);
    expect(returnVal).to.equal("FizzBuzz");
  });

  it("should return FizzBuzz from input 30", () => {
    const returnVal = fizzbuzz(30);
    expect(returnVal).to.equal("FizzBuzz");
  });
});
