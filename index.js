#!/usr/bin/env node --harmony

/**
 * Command Line Program to Tokenize an HTML file into a JavaScript object
 * @author Andrew Jarombek
 * @since 4/17/2018
 */

const program = require('commander');
const fs = require('fs');
const path = require('path');

program
    .version('0.1.0')
    .arguments('<filename>')
    .option('-o, --output <output>', 'Output File')
    .action((filename) => {
        console.info(`Input File: ${filename}`);
        console.info(`Ouput File: ${program.output}`);

        // Get the data from the input file
        const data = fs.readFileSync(path.join(__dirname, filename));

        // If we specify an output, write to that file.  Otherwise, print the contents to the console
        if (program.output) {
            fs.writeFile(path.join(__dirname, program.output), data, 'utf-8', (err) => {
                if (err){
                    console.error(err);
                }
            });
        } else {
            console.info(data.toString());
        }
    })
    .parse(process.argv);