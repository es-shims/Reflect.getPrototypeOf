'use strict';

var callBind = require('call-bind');
var gOPD = require('gopd');

var hasProto = [].__proto__ === Array.prototype; // eslint-disable-line no-proto

var dunderGetter = hasProto && gOPD && gOPD(Object.prototype, '__proto__');

module.exports = dunderGetter && dunderGetter.get && callBind(dunderGetter.get);
