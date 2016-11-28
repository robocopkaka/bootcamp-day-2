'use strict';
  var chai = require('chai')
  var expect = chai.expect
  var app = require('../apps/words.js')
describe("words()", function() {
  it("counts one word", function() {
    var expectedCounts = { word: 1 };
    expect(app.words("word")).to.deep.equal(expectedCounts);
  });

  it("counts one of each", function() {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    expect(app.words("one of each")).to.deep.equal(expectedCounts);
  });

  it("counts multiple occurrences", function() {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(app.words("one fish two fish red fish blue fish")).to.deep.equal(expectedCounts);
  });

  it("includes punctuation", function() {
    var expectedCounts = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
    expect(app.words("car : carpet as java : javascript!!&@$%^&")).to.deep.equal(expectedCounts);
  });

  it("includes numbers", function() {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(app.words("testing 1 2 testing")).to.deep.equal(expectedCounts);
  });

  it("respects case", function() {
    var expectedCounts = { go: 1, Go:1, GO:1 };
    expect(app.words("go Go GO")).to.deep.equal(expectedCounts);
  });

  it("counts properly international characters", function() {
    var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
    expect(app.words("¡Hola! ¿Qué tal? Привет!")).to.deep.equal(expectedCounts);
  });

  it("counts multiline", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(app.words("hello\nworld")).to.deep.equal(expectedCounts);
  });

  it("counts tabs", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(app.words("hello\tworld")).to.deep.equal(expectedCounts);
  });

  it("counts multiple spaces as one", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(app.words("hello  world")).to.deep.equal(expectedCounts);
  });

  it("handles properties that exist on Object’s prototype", function() {
    var expectedCounts = { reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  "ok?": 1};
    expect(app.words("reserved words like prototype and toString ok?")).to.deep.equal(expectedCounts);
  });
});