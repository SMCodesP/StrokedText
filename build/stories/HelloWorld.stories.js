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
import { jsx as _jsx } from "react/jsx-runtime";
import { HelloWorld } from "../HelloWorld";
export default {
    title: "HelloWorld",
    component: HelloWorld
};
var Template = function(args) {
    return /*#__PURE__*/ _jsx(HelloWorld, _object_spread({}, args));
};
export var Default = Template.bind({});
Default.args = {
    name: "World"
};

//# sourceMappingURL=HelloWorld.stories.js.map