#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todoslist:string[]=[];
let condition=true;
console.log(chalk.magenta("welcome to code with Anila to do list application"));
while(condition){
    let addTask =await inquirer.prompt([
    {
       name:"task",
       type:"input",
       message:"enter your new task:"
       

    }
]);
todoslist.push(addTask.task);
console.log(`${addTask.task}Task add in todo-list sucessfully`);
let addMoreTask = await inquirer.prompt([
    {
       name:"addmore",
       type:"confirm",
       message:"do you want to add more task?",
       default:"false"


    }
]);
condition = addMoreTask.addmore
}
console.log(`your up date todo list${todoslist}`);

