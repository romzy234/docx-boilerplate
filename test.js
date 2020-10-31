const fs = require('fs');
const docx = require("docx");
const { Document, Packer, Paragraph, TextRun } = docx;

const doc = new Document({
    title: "Assignment",
});

//
const paragraph = new Paragraph({
    text: "Short hand notation for adding text.",
});


doc.addSection({
    children: [ paragraph],
});

//
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync('cy.docx', buffer);
});

