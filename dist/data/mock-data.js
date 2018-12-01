"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMockData;

var _Family = _interopRequireDefault(require("../models/Family"));

var _Member = _interopRequireDefault(require("../models/Member"));

var _Registry = _interopRequireDefault(require("../models/Registry"));

var _Transaction = _interopRequireDefault(require("../models/Transaction"));

var _chance = _interopRequireDefault(require("chance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chance = new _chance.default();

function generateMockData() {
  var me = makeMember();
  me.registry = makeRegistry();
  var families = new Array(2).fill('').map(function () {
    return makeFamily(me.id);
  });
  me.families = families.map(function (family) {
    return family.id;
  });
  return {
    me: me,
    families: families
  };
}

function makeMember() {
  return new _Member.default({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
    dob: chance.birthday()
  });
}

function makeFamily(memberId) {
  return new _Family.default({
    name: chance.last(),
    members: [memberId]
  });
}

function makeRegistry() {
  return new _Registry.default({
    balance: 1000,
    transactions: new Array(10).fill('').map(function () {
      return makeTransaction();
    })
  });
}

function makeTransaction() {
  return new _Transaction.default({
    amount: chance.integer({
      min: -20,
      max: 20
    }),
    description: chance.sentence({
      words: 5
    })
  });
}