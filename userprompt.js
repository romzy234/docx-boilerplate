const readline = require('readline');
const data = [];
const gene = require('./index')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// 1st Question
rl.question('File Name? \n', (answer) => {
  // Logic
  data.push(answer)
  console.log(`File Name Is : ${answer}.docx`);
  // 2nd Question
  rl.question('What Your Name? \n', (answer) => {
    // Logic
    data.push(answer)
    console.log(`feedback: ${answer}`);
    //New
    //3rd Question
    rl.question('What your MAT.NO? \n', (answer) => {
      // Logic
      data.push(answer)
      console.log(` feedback: ${answer}`);
        //4th Question
      rl.question('What your DEPARTMENT? \n', (answer) => {
        // Logic
        data.push(answer)
        console.log(` feedback: ${answer}`);
          //5th Question
          rl.question('ASSIGNMENT COURSE TITLE ? \n', (answer) => {
            // Logic
            data.push(answer)
            console.log(`Your feedback is feedback: ${answer}`);
          //6th Question
          rl.question('What Is The COURSE CODE ? \n', (answer) => {
            // Logic
            data.push(answer)
            console.log(`Your feedback is feedback: ${answer}`);
              //7th Question
              rl.question(' The Assignment QUESTIONS ? \n', (answer) => {
                // Logic
                data.push(answer)
                console.log(`feedback: ${answer}`);
                rl.close();
                console.log(data)
                var a = data[0]; var b = data[1]; var c = data[2];var d = data[3];var e = data[4];var f = data[5];var g = data[6];
                gene.generator(a,b,c,d,e,f,g)

          });
          });
          });
      });
    });
  });
});