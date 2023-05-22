"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StrokedText", {
    enumerable: true,
    get: function() {
        return StrokedText;
    }
});
var _jsxruntime = require("react/jsx-runtime");
var _react = require("react");
var _reactcooldimensions = /*#__PURE__*/ _interop_require_default(require("react-cool-dimensions"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function StrokedText(props) {
    var updateSVG = function updateSVG() {
        if (svgRef.current) {
            var bbox = svgRef.current.getBBox();
            svgRef.current.setAttribute("viewBox", "".concat(bbox.x, " ").concat(bbox.y, " ").concat(bbox.width, " ").concat(bbox.height));
            svgRef.current.setAttribute("width", bbox.width + "");
            svgRef.current.setAttribute("height", bbox.height + "");
        }
    };
    var svgRef = /*#__PURE__*/ (0, _react.createRef)();
    var _useDimensions = (0, _reactcooldimensions.default)(), observe = _useDimensions.observe, width = _useDimensions.width;
    (0, _react.useEffect)(function() {
        updateSVG();
    }, [
        width
    ]);
    (0, _react.useEffect)(function() {
        updateSVG();
    }, []);
    var _props_className, _props_textClassName, _props_stroke, _props_fill, _props_paintOrder, _props_strokeWidth;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        style: _object_spread({
            overflow: "visible"
        }, props.style),
        ref: svgRef,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : "",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("text", {
            ref: observe,
            className: (_props_textClassName = props.textClassName) !== null && _props_textClassName !== void 0 ? _props_textClassName : "",
            style: _object_spread({
                stroke: (_props_stroke = props.stroke) !== null && _props_stroke !== void 0 ? _props_stroke : "black",
                fill: (_props_fill = props.fill) !== null && _props_fill !== void 0 ? _props_fill : "white",
                paintOrder: (_props_paintOrder = props.paintOrder) !== null && _props_paintOrder !== void 0 ? _props_paintOrder : "stroke fill markers",
                strokeWidth: (_props_strokeWidth = props.strokeWidth) !== null && _props_strokeWidth !== void 0 ? _props_strokeWidth : 2
            }, props.textStyle),
            children: props.children
        })
    });
}

//# sourceMappingURL=StrokedText.js.map