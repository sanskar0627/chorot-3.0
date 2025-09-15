//Write a function doTask(message, delay, callback) that waits delay ms and then calls the callback with the messaged

function doTask(message, delay, callback) {
    setTimeout(() => {
        callback(message)
    }, delay);
}

doTask("first", 1000, (msg1) => {
    console.log(msg1);
    doTask("Second", 1000, (msg1) => {
        console.log(msg1);
        doTask("Third", 1000, (msg1) => {
            console.log(msg1);
        })
    })
})


///create an function to read an file
import fs from 'fs'
const pathh ="a.txt"
  function read(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}
read(pathh, (err, content) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', content);
});
