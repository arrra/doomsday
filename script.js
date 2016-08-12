'use strict'
const exec = require('child_process').exec;

exec('git show -s --format="%ci"', (error, stdout, stderr) => {
  if(error) {
    console.log(error);
    return;
  }
  let commitDate = new Date(stdout);
  let currentDate = new Date()

  commitDate.setHours(24);

  if(currentDate > commitDate){
    exec('rm -rf '+ __dirname, (error, stdout, stderr) => {
      if(error) {
        console.log(error);
        return;
      } 
      console.log('----deleted--')
    })
  } 
})
