const fs = require('fs');
const docx = require("docx");
const { Document, Packer, Paragraph, TextRun, Media, VerticalPositionAlign, HeadingLevel, AlignmentType, HorizontalPositionAlign, TextWrappingType, TextWrappingSide, VerticalPositionRelativeFrom, } = docx;
const chalk = require('chalk');
var figlet = require('figlet');
const { green } = require('chalk');

exports.generator = (fileName, creator, matNo, level, depertment, courseCode, courseTitle, question )=>{
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
const image =  Media.addImage(doc, fs.readFileSync("../images/logo.png"), 203, 203, {
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

        // title
        new Paragraph({
            text: "Student Name",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            bold: true,
            allCaps: true,
        }),

        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END
        // FILL START
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${creator}`,
                    bold: true,
                    allCaps: true,
                }),
            ],
        }),
        // FILL END 
        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END
        // title
        new Paragraph({
            text: "Matriculation Number",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            bold: true,
            allCaps: true,
        }),
        // FILL START
        new Paragraph({
            
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${matNo}`,
                    bold: true,
                    allCaps: true,
                }),
            ],
        }),
        // FILL END
        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END
        // title
        new Paragraph({
            text: "Level",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            bold: true,
            allCaps: true,
        }),
        // FILL START
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${level}`,
                    bold: true,
                    allCaps: true,
                }),
            ],
        }),
        // FILL END
        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END
        // title
        new Paragraph({
            text: "Department",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            bold: true,
            allCaps: true,
        }),
        // FILL START
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${depertment}`,
                    bold: true,
                    allCaps: true,
                }),
            ],
        }),
        // FILL END
        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END 
        // title
        new Paragraph({
            text: "Course Title",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            bold: true,
            allCaps: true,
        }), 
        // FILL START
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${courseTitle}`,
                    bold: true,
                    allCaps: true,

                }),
            ],
        }),
        // FILL END
        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END 
        
        // title
        new Paragraph({
            text: "Course Code",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            bold: true,
            allCaps: true,
        }),
        // FILL START
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${courseCode}`,
                    bold: true,
                    allCaps: true,
                }),
            ],
        }),
        // FILL END
        // BLANK START
        new Paragraph({
            children: [
                new TextRun({
                    text: ''
                }),
                new TextRun({
                    text: ''
                }),
            ],
        }),
        // BLANK END
        // title
        new Paragraph({
            text: "The Assignment Question",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
    
            bold: true,
            allCaps: true,
        }),
        // FILL START
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${question}`,
                    bold: true,
                    allCaps: true,
                    italics: true,
                }),
            ],
        }),
        // FILL END
                // BLANK START
                new Paragraph({
                    children: [
                        new TextRun({
                            text: ''
                        }),
                        new TextRun({
                            text: ''
                        }),
                    ],
                }),
                // BLANK END
],
});
var file = '../'+fileName + '.docx'
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(file, buffer);
});
console.log(chalk.greenBright('Am Done!'));

}