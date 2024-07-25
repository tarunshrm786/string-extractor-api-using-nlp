//Hurrahhhhhh
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 7000; // Change port to 7000 as per your requirement

app.use(bodyParser.json());

// Configure CORS to allow requests from http://localhost:3000
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use the cors middleware with options

function extractText(paragraph) {
    // Use a regular expression to find sentence-ending full stops, ignoring common abbreviations
    const stops = [];
    const regex = /(?<!\d)(?<!No)(?<!Annexure)(?<!Dr)(?<!Mr)(?<!Mrs)(?<!Ms)(?<!St)\.(?=\s|$)/g;
    let match;

    while ((match = regex.exec(paragraph)) !== null) {
        stops.push(match.index);
    }

    // Check if there are at least two full stops
    if (stops.length >= 2) {
        // Extract the text between the second-to-last and last full stops
        const start = stops[stops.length - 2] + 1;
        const end = stops[stops.length - 1];
        let extracted = paragraph.slice(start, end).trim();
        
        // Remove the specified phrases
        extracted = extracted.replace(/is being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/are collectively filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/is being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/is annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/are being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/are annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        extracted = extracted.replace(/is being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/are collectively filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/is being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/is annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/are being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/are annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/is annexed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/is annexed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        extracted = extracted.replace(/which is being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/which are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/which are collectively filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/which is being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/which is annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/which are being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        extracted = extracted.replace(/which are annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        extracted = extracted.replace(/which is being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which are collectively filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which is being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which is annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which are being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which are annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which is annexed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        extracted = extracted.replace(/which is annexed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        extracted = extracted.replace(/In this regard,/g, '');

           // Extract dates from the extracted text
           const dates = extractDates(extracted);


        // Remove dates and the word "dated" from the extracted text
        extracted = extracted.replace(/\b(\d{2})\.(\d{2})\.(\d{4})\b/g, '').trim();
        extracted = extracted.replace(/\bdated\b/g, '').trim();
        
       // return extracted;
       return { text: extracted, dates: dates };

    } else {
        return "Not enough full stops in the paragraph.";
    }
}

function extractDates(paragraph) {
    // Use a regular expression to find dates in the format dd.mm.yyyy
    const dateRegex = /\b(\d{2})\.(\d{2})\.(\d{4})\b/g;
    let dates = [];
    let match;
    
    while ((match = dateRegex.exec(paragraph)) !== null) {
        dates.push(match[0]);
    }
    
    return dates;
}

app.post('/extract-text', (req, res) => {
    const { paragraphs } = req.body;

    if (!Array.isArray(paragraphs) || paragraphs.some(p => typeof p !== 'string')) {
        return res.status(400).json({ error: 'Invalid input. Please provide an array of paragraphs as strings.' });
    }

    const extractedTexts = paragraphs
        .filter(paragraph => paragraph.includes('Annexure No'))
        // .map(paragraph => ({
        //     text: extractText(paragraph),
        //     dates: extractDates(paragraph)
        // }));
        .map(paragraph => extractText(paragraph));

    res.json({ extractedTexts });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


