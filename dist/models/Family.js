"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chance = _interopRequireDefault(require("chance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chance = new _chance.default(); // just a group of users

var Family = function Family(props) {
  _classCallCheck(this, Family);

  this.id = chance.guid();
  this.dateCreated = new Date();
  this.name = props.name;
  this.members = props.members || []; // [member.id]
};

exports.default = Family;