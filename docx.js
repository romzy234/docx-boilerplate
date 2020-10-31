const fs = require('fs');
const docx = require("docx");
const { Document, Packer, Paragraph, TextRun } = docx;
const chalk = require('chalk');
var figlet = require('figlet');
 
figlet('Assignment-Tool', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.red(data))
});

console.log(chalk.blue('Application Started!'));

const doc = new Document({
    creator: "Cyril Ogoh",
    description: "My Assignment ;-(",
    title: "Assignment",
    background: {
        color: "C45911",
    },
});

doc.addSection({
    properties: {},
    children: [
        new Paragraph({
            children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: "Foo Bar",
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

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("cyril.docx", buffer);
});
console.log(chalk.greenBright('Am Done!'));