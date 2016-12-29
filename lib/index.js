/*istanbul ignore next*/"use strict";

exports.__esModule = true;

exports.default = function () {
    return {
        visitor: { /*istanbul ignore next*/
            CallExpression: function CallExpression(path) {
                var c = path.get("callee");
                if (c.matchesPattern("console", true)) {
                    var prop = c.node.property;
                    if (prop && prop.name === 'log') {
                        path.remove();
                    }
                }
            }
        }
    };
};

/*istanbul ignore next*/module.exports = exports["default"];