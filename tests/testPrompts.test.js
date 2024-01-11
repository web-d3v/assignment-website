const exp = require("node:constants");
const fs = require("node:fs");

const pages = ["Home", "Hardtail", "Full Suspension", "Gravel", "Nutrition Advice", "Skills Development", "Place 1", "Place 2", "Contact Us"];
const devices = ["Desktop", "Mobile"];
const browsers = ["Edge", "Firefox"];

let tests = [];

tests.push(`Navigation Tests\n`)
pages.forEach(page => {
    for (let i = 1; i < pages.length + 1; i++) {
        let test = `Test redirect to ${pages[i-1]} when ${pages[i - 1]} button is left clicked on ${page} Page`
        tests.push(test);
    }
})

tests.push("\n")
pages.forEach(page => {
    for (let i = 1; i < pages.length + 1; i++) {
        let test = `Left Click on the ${pages[i - 1]} button on ${page} Page`
        tests.push(test);
    }
})
tests.push("\n")
tests.push(`Expected Results\n`)
pages.forEach(page => {
    for (let i = 1; i < pages.length + 1; i++) {
        let expResult = `Page refreshes onto the ${pages[i - 1]} page`
        tests.push(expResult);
    }
})


tests.push(`Device Tests\n`)
devices.forEach(device => {
    let test = `Test website usability on a ${device} device`
    tests.push(test)
})
tests.push(`\nBrowser Tests\n`)
browsers.forEach(browser => {
    let test = `Test website usability on the ${browser} browser`
    tests.push(test)
})


console.log(tests.join("\n"));
fs.writeFileSync("./testPlan_nospaces.txt", "");
fs.writeFileSync("./testPlan_nospaces.txt", tests.join("\n"));
