import { suma1, multiplica1 } from "./controller.js";
import chalk from "chalk";

const sum1 = suma1(1, 2);
console.log(sum1);
console.log(chalk.redBright(sum1));

const mul1 = multiplica1(4, 5);
console.log(mul1);
console.log(chalk.greenBright(mul1));