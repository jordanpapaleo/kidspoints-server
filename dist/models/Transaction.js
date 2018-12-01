"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chance = _interopRequireDefault(require("chance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chance = new _chance.default();

var Transaction = function Transaction(props) {
  _classCallCheck(this, Transaction);

  this.id = chance.guid();
  this.dateCreated = new Date();
  this.amount = props.amount; // Number

  this.description = props.description; // String
};

exports.default = Transaction;