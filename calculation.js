import chalk from "chalk";
export default function calculation(operation, num1, num2) {
    switch (operation) {
        case 'Add':
            console.clear();
            console.log(chalk.green("INPUT= ") + num1 + "+" + num2);
            // const spinner = createSpinner('Checking answer...').start();
            console.log(chalk.red("ANSWER:") + num1 + num2);
            break;
        case 'Sub':
            console.clear();
            console.log(chalk.green("INPUT= ") + num1 + "-" + num2);
            console.log(chalk.red("ANSWER:") + (num1 - num2));
            break;
        case 'Mul':
            console.clear();
            console.log(chalk.green("INPUT= ") + num1 + "*" + num2);
            console.log(chalk.red("ANSWER:") + (num1 * num2));
            break;
        case 'Div':
            console.clear();
            console.log(chalk.green("INPUT= ") + num1 + "/" + num2);
            console.log(chalk.red("ANSWER:") + (num1 / num2));
            break;
        default:
            console.log("INVALID OPERATION");
    }
}
