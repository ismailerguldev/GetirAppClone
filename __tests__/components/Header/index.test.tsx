import React from "react";
import { render, waitFor } from "@testing-library/react-native"
import Header from "../../../src/components/HomeScreen/Header/Header";
describe("components/HomeScreen/Header", () => {
    test("renders Correctly", async () => {
        const { toJSON, debug } = render(<Header />)
        expect(toJSON()).toMatchSnapshot()
    })
})