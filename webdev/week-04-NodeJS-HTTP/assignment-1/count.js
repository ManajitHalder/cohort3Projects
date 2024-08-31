const { Command } = require("commander");
const fs = require('fs');
// const { connected } = require("process");

const program = new Command();

program
    .name('count')
    .description('CLI to some Javascript file utilities')
    .version('0.1.0')

program.command('count')
    .description('Counts the number of words in a file')
    .argument('<file>', 'file containing some text')
    .option('--lines', 'count the number of lines in a file')
    .action((str, options) => {
        fs.readFile(str, "utf-8", (err, data) => {
            if (err) {
                console.error(`Error reading file ${err.message}`);
                process.exit(1);
            } else if (options.lines) {
                const lines = data.split('\n')
                console.log(lines.length);
            } else {
                const words = data.trim().split(/\s+/)
                console.log(words.length);
            }
        })
    })
    
program.addHelpText('after', `
Examples:
  $ node count.js count file.txt            # Count words (default)
  $ node count.js count file.txt --lines    # Count lines
`);

program.parse();
