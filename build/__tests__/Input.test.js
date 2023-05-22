import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";
describe("<Input />", function() {
    it("should render", function() {
        expect(render(/*#__PURE__*/ _jsx(Input, {}))).toBeTruthy();
    });
    test("Input writing", function() {
        render(/*#__PURE__*/ _jsx(Input, {}));
        var input = screen.getByLabelText(/enter a value/i);
        fireEvent.change(input, {
            target: {
                value: "r\xe9sultat"
            }
        });
        expect(input).toHaveValue("r\xe9sultat");
        var result = screen.getByTestId("input-result");
        expect(result).toHaveTextContent("Input result : r\xe9sultat!");
    });
});

//# sourceMappingURL=Input.test.js.map