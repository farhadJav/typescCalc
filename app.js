#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//import gradient from 'gradient-string';
import chalkAnimation from "chalk-animation";
import calculation from "./calculation.js";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Welcome to the CLI Calculator!');
    await sleep();
    console.log(`
      ${chalk.bgBlue('Instructions ')}
      ${chalk.blue('1.')} Choose an operation.
      ${chalk.blue('2.')} Enter a first number.
      ${chalk.blue('3.')} Enter a second number.
      ${chalk.blue('4.')} Press enter to see the answer.  
    `);
    rainbowTitle.stop();
    await sleep(1000);
}
console.clear();
await welcome();
let answers = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Which calculation would you like to perform",
        choices: ["Add", 'Sub', "Div", "Mul"]
    },
    {
        name: "value1",
        type: "number",
        message: "Please enter the first number",
    },
    {
        name: "value2",
        type: "number",
        message: "Please enter the second number",
    }
]).then(function (answer) {
    calculation(answer.operation, answer.value1, answer.value2);
});
//console.log(chalk.blueBright("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
