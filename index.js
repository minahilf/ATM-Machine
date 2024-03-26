#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollars
let pin = 2228;
let pinCode = await inquirer.prompt([
    {
        name: "pinC",
        type: "number",
        message: "Enter your pin code:",
    },
]);
if (pinCode.pinC === pin) {
    console.log("Valid Pin Code");
    let operation = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Please select options",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    //FAST CASH HOMEWORK
    if (operation.options === "Withdraw") {
        let withdrawalType = await inquirer.prompt([
            {
                name: "type",
                type: "list",
                message: "Choose withdrawal type",
                choices: [1000, 2000, 5000, 8000, "Other"],
            },
        ]);
        if (withdrawalType.type === "Other") {
            let amount = await inquirer.prompt([
                {
                    name: "Amount",
                    type: "number",
                    message: "Enter your amount to withdraw:",
                },
            ]);
            //using if statement and template literals FOR HOMEWORK
            if (amount.Amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amount.Amount;
                console.log(`${amount.Amount} withdrawn sucessfully, Your remaining balance is: ${myBalance}`);
            }
        }
        else {
            myBalance -= withdrawalType.type;
            console.log(`${withdrawalType.type} withdrawn sucessfully, Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operation.options === "Check Balance") {
        console.log(`Your Balance is ${myBalance}`);
    }
}
else {
    console.log("Invalid Pin Code, Please Try Again");
}
