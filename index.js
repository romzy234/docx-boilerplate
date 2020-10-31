const fs = require('fs');
const docx = require("docx");
const { Document, Packer, Paragraph, TextRun } = docx;
const chalk = require('chalk');
var figlet = require('figlet');

exports.generator = (fileName, creator, matNo, depertment, courseCode, courseTitle, question )=>{
figlet('Assignment-Tool', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.red(data))
});
console.log();console.log();console.log();
console.log(chalk.blue('Application Started!'));

const doc = new Document({
    creator: creator,
    description: question,
    title: "Assignment",
});

doc.addSection({
    properties: {},
    children: [
        new Paragraph({
            children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: `Foo Bar This is my mat Number ${matNo} \n ${depertment}\n${courseCode}\n${courseTitle}\n`,
                    bold: true,
                }),
                new TextRun({
                    text: "\tGithub is the best",
                    bold: true,
                }),
            ],
        }),
    ],
});
var file = fileName + '.docx'
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(file, buffer);
});
console.log(chalk.greenBright('Am Done!'));

}