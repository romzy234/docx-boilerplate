const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
const cyril = () =>{
if (!chalk.supportsColor) {
    console.log('Hello world!')
  }}
cyril()