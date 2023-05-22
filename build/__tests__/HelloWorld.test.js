import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import { HelloWorld } from "../HelloWorld";
describe("<HelloWorld />", function() {
    it("should render", function() {
        expect(render(/*#__PURE__*/ _jsx(HelloWorld, {
            name: "world"
        }))).toBeTruthy();
    });
    it("should render good word", function() {
        var getByTestId = render(/*#__PURE__*/ _jsx(HelloWorld, {
            name: "monde"
        })).getByTestId;
        expect(getByTestId("h1")).toHaveTextContent("Hello monde");
    });
});

//# sourceMappingURL=HelloWorld.test.js.map