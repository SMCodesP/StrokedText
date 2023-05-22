"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxruntime = require("react/jsx-runtime");
var _react = require("@testing-library/react");
var _HelloWorld = require("../HelloWorld");
describe("<HelloWorld />", function() {
    it("should render", function() {
        expect((0, _react.render)(/*#__PURE__*/ (0, _jsxruntime.jsx)(_HelloWorld.HelloWorld, {
            name: "world"
        }))).toBeTruthy();
    });
    it("should render good word", function() {
        var getByTestId = (0, _react.render)(/*#__PURE__*/ (0, _jsxruntime.jsx)(_HelloWorld.HelloWorld, {
            name: "monde"
        })).getByTestId;
        expect(getByTestId("h1")).toHaveTextContent("Hello monde");
    });
});

//# sourceMappingURL=HelloWorld.test.js.map