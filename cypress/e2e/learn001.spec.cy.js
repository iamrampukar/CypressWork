/// <reference types="cypress"/>
const cyView = require("cy-view");

const devices = [
    {
        model: "Pixel 7",
        width: 412,
        height: 915
    },
    {
        model: "iPhone 12 Pro",
        width: 390,
        height: 844
    },
    {
        model: "iPad Pro",
        width: 1024,
        height: 1366
    }
];

// Add urls to test against
const urls = [
    "https://google.com"
];

const washingMachinePageTests = cyView(devices);

// Pass your urls constant in and your good to go!
washingMachinePageTests(urls, () => {
    describe("My tests running on all viewports across various URLs", () => {
        it("should test something...", () => {
        });
    });
});