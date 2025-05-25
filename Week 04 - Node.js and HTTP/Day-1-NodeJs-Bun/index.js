/* Command line interface */
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('File related cli')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === " ") {
            words++;
          }
        }
        console.log(`There are ${words + 1} words in ${file}`);
      }
    });
  });

// New command to count sentences
program.command('count_sentences')
  .description('Count the number of sentences in a file')
  .argument('<file>', 'file to count sentences in')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // Split by ., !, or ? followed by space or end of string
        const sentences = data.split(/[.!?]+(\s|$)/).filter(sentence => sentence.trim().length > 0);
        console.log(`There are ${sentences.length} sentences in ${file}`);
      }
    });
  });

program.parse();
