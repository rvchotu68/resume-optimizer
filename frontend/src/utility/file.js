import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const generateFile = async (text) => {
  const pdfdoc = await PDFDocument.create();

  let page = pdfdoc.addPage();

  const font = await pdfdoc.embedFont(StandardFonts.TimesRoman);

  const fontSize = 12;

  const lineHeight = fontSize + 4;

  const { height, width } = page.getSize();

  let y = height - 50;

  const pageMargin = 50;

  const paragraphs = text.split("\n");

  for (let paragraph of paragraphs) {
    const lines = wrapText(paragraph, font, fontSize, width - 2 * pageMargin);
    for (let line of lines) {
      if (y < pageMargin + lineHeight) {
        page = pdfdoc.addPage();
        y = height - pageMargin;
      }

      page.drawText(line, {
        x: pageMargin,
        y,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      });

      y -= lineHeight;
      console.log("inside y: ", y);
    }

    y -= lineHeight / 2; // paragraph spacing
    console.log("outside y: ", y);
  }

  const pdfBytes = await pdfdoc.save();

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  return URL.createObjectURL(blob);
};

const wrapText = (text, font, fontSize, maxWidth) => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (let word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);

    if (testWidth < maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
};
