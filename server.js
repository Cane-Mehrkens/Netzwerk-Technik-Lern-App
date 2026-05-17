const express = require("express");
const path = require("path");
const { Document, Packer, Paragraph, TextRun } = require("docx");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "app")));
app.use(express.json({ limit: "10mb" }));

app.post("/download-results", async (req, res) => {
    try {
        const { score, total, percent, answers } = req.body;

        if (!Array.isArray(answers)) {
            return res.status(400).send("Keine Antworten empfangen.");
        }

        const children = [];

        children.push(new Paragraph({
            children: [
                new TextRun({
                    text: "Netzwerktechnik Quiz Ergebnis",
                    bold: true,
                    size: 34
                })
            ]
        }));

        children.push(new Paragraph(" "));
        children.push(new Paragraph(`Punkte: ${score} / ${total}`));
        children.push(new Paragraph(`Prozent: ${percent}%`));
        children.push(new Paragraph(" "));

        children.push(new Paragraph({
            children: [
                new TextRun({
                    text: "Auswertung",
                    bold: true,
                    size: 28
                })
            ]
        }));

        children.push(new Paragraph(" "));

        answers.forEach((a, index) => {
            children.push(new Paragraph({
                children: [
                    new TextRun({
                        text: `Frage ${index + 1}: ${a.frage}`,
                        bold: true
                    })
                ]
            }));

            children.push(new Paragraph(`Deine Antwort: ${a.user || "-"}`));
            children.push(new Paragraph(`Richtige Antwort: ${a.korrekt || "-"}`));
            children.push(new Paragraph(`Bewertung: ${a.richtig ? "Richtig" : "Falsch"}`));

            if (a.erklaerung) {
                children.push(new Paragraph(`Erklärung: ${a.erklaerung}`));
            }

            if (a.tipp) {
                children.push(new Paragraph(`Tipp: ${a.tipp}`));
            }

            children.push(new Paragraph(" "));
        });

        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children
                }
            ]
        });

        const buffer = await Packer.toBuffer(doc);

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        );

        res.setHeader(
            "Content-Disposition",
            "attachment; filename=Netzwerktechnik_Quiz_Ergebnis.docx"
        );

        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Fehler beim Erstellen der DOCX.");
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});