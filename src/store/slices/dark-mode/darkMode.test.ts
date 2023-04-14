import { darkModeReducer, toggleDarkMode } from "./darkMode";

describe("darkMode reducer", () => {
    it("should handle initial state", () => {
        expect(darkModeReducer(undefined, { type: "unknown" })).toEqual(false);
    });

    it("should handle toggleDarkMode", () => {
        const actual = darkModeReducer(false, toggleDarkMode());
        expect(actual).toEqual(true);
    });

    it("should enable the dark mode if it is disabled", () => {
        const actual = darkModeReducer(false, toggleDarkMode());
        expect(actual).toEqual(true);
    });

    it("should disable the dark mode if it is enabled", () => {
        const actual = darkModeReducer(true, toggleDarkMode());
        expect(actual).toEqual(false);
    });
});