const fs = require("node:fs");

const pages = ["Home", "Hardtail", "Full Suspension", "Gravel", "Nutrition Advice", "Skills Development", "Place 1", "Place 2", "Contact Us"];
const iris_pages = ["Home", "Bikes", "Places", "Kit and Nutrition Advice", "Helpful Videos"]
const devices = ["Desktop", "Mobile"];
const browsers = ["Edge", "Firefox"];

let tests = [];
let itests = [];

//devices.forEach(device => {
//tests.push(`\n${device}\n`)
//browsers.forEach(browser => {
//tests.push(`${browser}`)
tests.push(`Navigation Tests\n`)
itests.push(`Navigation Tests\n`)
pages.forEach(page => {
    //tests.push(`\n${page}\n`)
    for (let i = 1; i < pages.length + 1; i++) {
        let test = `Test ${pages[i - 1]} button on ${page} Page`
        tests.push(test);
    }
    tests.push("\n")
})

iris_pages.forEach(ipage => {
    for (let i = 1; i < iris_pages.length + 1; i++) {
        let test = `Test ${iris_pages[i - 1]} button on ${ipage} Page`
        itests.push(test);
    }
    itests.push("\n")
})

tests.push(`\nDevice Tests\n`)
itests.push(`\nDevice Tests\n`)
devices.forEach(device => {
    let test = `Test website usability on a ${device} device`
    tests.push(test)
    itests.push(test)
})
tests.push(`\nBrowser Tests\n`)
itests.push(`\nBrowser Tests\n`)
browsers.forEach(browser => {
    let test = `Test website usability on the ${browser} browser`
    tests.push(test)
    itests.push(test)
})
//})
//});


console.log(tests.join("\n"));
console.log(itests.join("\n"));
fs.writeFileSync("./testPrompts_separateTests.txt", "");
fs.writeFileSync("./testPrompts_separateTests.txt", tests.join("\n"));
fs.writeFileSync("./irisTests.txt", itests.join("\n"));