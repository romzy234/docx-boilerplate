const fs = require('fs');
const docx = require("docx");
const { Document, Packer, Paragraph, TextRun, Media, VerticalPositionAlign, HeadingLevel, AlignmentType, HorizontalPositionAlign, TextWrappingType, TextWrappingSide, VerticalPositionRelativeFrom, } = docx;
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
const image =  Media.addImage(doc, fs.readFileSync("./images/logo.png"), 203, 203, {
    floating: {
        horizontalPosition: {
            align:  HorizontalPositionAlign.CENTER,
        },
        verticalPosition: {
            align: VerticalPositionAlign.TOP
        },
        wrap: {
            type: TextWrappingType.TOP_AND_BOTTOM,
            side: TextWrappingSide.BOTH_SIDES,
        },
        margins: {
            top: 201440,
            bottom: 401440,
        },
    },
});

doc.addSection({
    properties: {},
    children: [
        new Paragraph(image),
        new Paragraph({
            children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: `Foo Bar This is my mat Number ${matNo} \n ${depertment}\n${courseCode}\n${courseTitle}\n`,
                    bold: true,
                }),
                new TextRun({
                    text: "\tGithub is the best",
                    bold: false,
                    allCaps: true,
                }),
            ],
        }),
        new Paragraph({
            children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: `Foo Bar This is my mat Number ${matNo} \n ${depertment}\n${courseCode}\n${courseTitle}\n`,
                    bold: true,
                }),
                new TextRun({
                    text: "\tGithub is the best \n",
                    break: true,
                    bold: true,
                    allCaps: true,
                }),
            ],
        }),
        new Paragraph({
            text: "bitch Am the new Tiltile ",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
           // thematicBreak: true,
           bold: true,
           allCaps: true,
        }),
        new Paragraph({
            text: "Paragraph with spacing before",
            spacing: {
                before: 200,
            },
           alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "superScript",
                    superScript: true,
                }),
                new TextRun({
                    text: "subScript",
                    subScript: true,
                }),
                new TextRun({
                    text: "break",
                    break: true,
                }),
            ],
        }),
        //  new TextRun({
        //     text: "superScript",
        //     superScript: true,
        // }),
        // new TextRun({
        //     text: "subScript",
        //     subScript: true,
        // }),
        // new TextRun({
        //     text: "break",
        //     break: true,
        // }),
    ],
});
var file = fileName + '.docx'
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(file, buffer);
});
console.log(chalk.greenBright('Am Done!'));

}