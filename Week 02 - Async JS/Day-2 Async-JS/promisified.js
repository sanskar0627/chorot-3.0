// Question 1:
// Write a function  using promises that does the following:
// 1. Reads the contents of a file.
// 2. Trims the extra spaces from the left and right of the content.
// 3. Writes the trimmed content back to the same file.
const fs = require("fs").promises;

function readAndTrim(filename) {

    return fs.readFile(filename, "utf-8")
        .then((data) => {
            const trimmed = data.trim();
            console.log(trimmed);
              return fs.writeFile(filename, trimmed)
        });
}
readAndTrim("sans.txt");