"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chance = _interopRequireDefault(require("chance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chance = new _chance.default();

var Member = function Member(props) {
  _classCallCheck(this, Member);

  this.id = chance.guid();
  this.dateCreated = new Date();
  this.password = props.password;
  this.restricted = false;
  this.families = [];
  this.profile = {
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email,
    dob: props.dob
  };
  this.registry = props.registry;
};

exports.default = Member;