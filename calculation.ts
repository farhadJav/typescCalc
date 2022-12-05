import chalk from "chalk";
import { createSpinner } from 'nanospinner';

export default function calculation (operation:any, num1:number,num2:number)
{
    
switch  (operation){

    case 'Add':
        console.clear();
        console.log(chalk.green("INPUT= ")+num1+"+"+num2);
       // const spinner = createSpinner('Checking answer...').start();
        console.log(chalk.red("ANSWER:")+num1+num2);
        break;

    case 'Sub':
        console.clear();
        console.log(chalk.green("INPUT= ")+num1+"-"+num2);
        console.log(chalk.red("ANSWER:")+(num1-num2));
    break;
    
    case 'Mul':
        console.clear();
        console.log(chalk.green("INPUT= ")+num1+"*"+num2);
        console.log(chalk.red("ANSWER:")+(num1*num2));
    break;

    case 'Div':
        console.clear();
        console.log(chalk.green("INPUT= ")+num1+"/"+num2);
        console.log(chalk.red("ANSWER:")+(num1/num2));
    break;
   
    default:
        console.log("INVALID OPERATION");

}


}