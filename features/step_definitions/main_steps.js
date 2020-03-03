const {Given, Then, When, Before, After} = require('cucumber');
const path = require('path');
const Adder = require(path.resolve('./lib/adder'));
const {expect} = require('chai')


Before({timeout:1000}, function () {

    this.context = {
    };
});

Given(/^regular Adder$/, function () {
    this.context['adder'] = new Adder();
});

When(/^add (.*)$/, function (value) {
    this.context['adder'].add(Number(value))
});

Then(/^result is (.*)$/, function (expectedValue) {
    let result = this.context['adder'].result();
    expect(result).to.be.eq(Number(expectedValue));
});


After(function () {
    this.context = undefined;
});
