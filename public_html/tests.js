QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, plus(2, 3), "3 + 2 is 5");
});

QUnit.test("Testing Plus function with failing", function(assert) {
  assert.equal(5, plus(2, 2), "2 + 2 is 5");
});

QUnit.test("Testing minus function", function(assert) {
  assert.equal(2, minus(5, 3), "5 - 3 is 2");
});

QUnit.test("Testing minus function with failing", function(assert) {
  assert.equal(1, minus(2, 2), "2 - 2 is 1");
});

QUnit.test("Testing multiply function", function(assert) {
  assert.equal(15, multiply(5, 3), "5 * 3 is 15");
});

QUnit.test("Testing multiply function with failing", function(assert) {
  assert.equal(5, multiply(2, 2), "2 * 2 is 5");
});

QUnit.test("Testing divide function", function(assert) {
  assert.equal(2, divide(6, 3), "6 / 3 is 2");
});

QUnit.test("Testing divide function with failing", function(assert) {
  assert.equal(2, divide(2, 2), "2 / 2 is 2");
});

QUnit.test("Testing log10 function", function(assert) {
  assert.equal(2, log10(100), "log10(100) is 2");
});

QUnit.test("Testing log10 function with failing", function(assert) {
  assert.equal(2, log10(1000), "log10(1000) is 2");
});
