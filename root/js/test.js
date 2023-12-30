const fs = require("node:fs");

const pages = ["Home", "Hardtail", "Full Suspension", "Gravel", "Nutrition Advice", "Skills Development", "Place 1", "Place 2", "Contact Us"];
const devices = ["Desktop", "Mobile"];
const browsers = ["Edge", "Firefox"];

let tests = [];

tests.push(`Navigation Tests\n`)
pages.forEach(page => {
    for (let i = 1; i < pages.length + 1; i++) {
        let test = `Test ${pages[i - 1]} button on ${page} Page`
        tests.push(test);
    }
    tests.push("")
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
fs.writeFileSync("./testPrompts_separateTests.txt", "");
fs.writeFileSync("./testPrompts_separateTests.txt", tests.join("\n"));
