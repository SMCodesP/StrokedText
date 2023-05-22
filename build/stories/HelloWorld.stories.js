"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    Default: function() {
        return Default;
    }
});
var _jsxruntime = require("react/jsx-runtime");
var _StrokedText = require("../StrokedText");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var _default = {
    title: "HelloWorld",
    component: _StrokedText.HelloWorld
};
var Template = function(args) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_StrokedText.HelloWorld, _object_spread({}, args));
};
var Default = Template.bind({});
Default.args = {
    name: "World"
};

//# sourceMappingURL=HelloWorld.stories.js.map