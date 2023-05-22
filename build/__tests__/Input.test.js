"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxruntime = require("react/jsx-runtime");
var _react = require("@testing-library/react");
var _Input = require("../Input");
describe("<Input />", function() {
    it("should render", function() {
        expect((0, _react.render)(/*#__PURE__*/ (0, _jsxruntime.jsx)(_Input.Input, {}))).toBeTruthy();
    });
    test("Input writing", function() {
        (0, _react.render)(/*#__PURE__*/ (0, _jsxruntime.jsx)(_Input.Input, {}));
        var input = _react.screen.getByLabelText(/enter a value/i);
        _react.fireEvent.change(input, {
            target: {
                value: "r\xe9sultat"
            }
        });
        expect(input).toHaveValue("r\xe9sultat");
        var result = _react.screen.getByTestId("input-result");
        expect(result).toHaveTextContent("Input result : r\xe9sultat!");
    });
});

//# sourceMappingURL=Input.test.js.map