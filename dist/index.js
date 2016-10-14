"use strict";

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

console.log("Hello world !!!");

var router = new _router2.default();
var temp = router.findRoutes(252, 235);
console.log(temp);
