// //Hurrahhhhhh
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors package
// const app = express();
// const port = 7000; // Change port to 7000 as per your requirement

// app.use(bodyParser.json());

// // Configure CORS to allow requests from http://localhost:3000
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions)); // Use the cors middleware with options

// function extractText(paragraph) {
//     // Use a regular expression to find sentence-ending full stops, ignoring common abbreviations
//     const stops = [];
//     const regex = /(?<!\d)(?<!No)(?<!Annexure)(?<!Dr)(?<!Mr)(?<!Mrs)(?<!Ms)(?<!St)\.(?=\s|$)/g;
//     let match;

//     while ((match = regex.exec(paragraph)) !== null) {
//         stops.push(match.index);
//     }

//     // Check if there are at least two full stops
//     if (stops.length >= 2) {
//         // Extract the text between the second-to-last and last full stops
//         const start = stops[stops.length - 2] + 1;
//         const end = stops[stops.length - 1];
//         let extracted = paragraph.slice(start, end).trim();
        
        // // Remove the specified phrases
        // extracted = extracted.replace(/is being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/are collectively filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/is being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/is annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/are being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/are annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        // extracted = extracted.replace(/is being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/are collectively filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/is being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/is annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/are being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/are annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/is annexed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/is annexed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        // extracted = extracted.replace(/which is being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/which are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/which are collectively filed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/which is being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/which is annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/which are being annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');
        // extracted = extracted.replace(/which are annexed as Annexure No\.\s*\d*\s*to this affidavit/g, '');

        // extracted = extracted.replace(/which is being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which are collectively filed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which is being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which is annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which are being annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which are annexed as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which is annexed herewith and marked as Annexure No\.\s*\d*\s*with this affidavit/g, '');
        // extracted = extracted.replace(/which is annexed herewith and marked as Annexure No\.\s*\d*\s*to this affidavit/g, '');

//         extracted = extracted.replace(/In this regard,/g, '');

//            // Extract dates from the extracted text
//            const dates = extractDates(extracted);


//         // Remove dates and the word "dated" from the extracted text
//         extracted = extracted.replace(/\b(\d{2})\.(\d{2})\.(\d{4})\b/g, '').trim();
//         extracted = extracted.replace(/\bdated\b/g, '').trim();
        
//        // return extracted;
//        return { text: extracted, dates: dates };

//     } else {
//         return "Not enough full stops in the paragraph.";
//     }
// }

// function extractDates(paragraph) {
//     // Use a regular expression to find dates in the format dd.mm.yyyy
//     const dateRegex = /\b(\d{2})\.(\d{2})\.(\d{4})\b/g;
//     let dates = [];
//     let match;
    
//     while ((match = dateRegex.exec(paragraph)) !== null) {
//         dates.push(match[0]);
//     }
    
//     return dates;
// }

// app.post('/extract-text', (req, res) => {
//     const { paragraphs } = req.body;

//     if (!Array.isArray(paragraphs) || paragraphs.some(p => typeof p !== 'string')) {
//         return res.status(400).json({ error: 'Invalid input. Please provide an array of paragraphs as strings.' });
//     }

//     const extractedTexts = paragraphs
//         .filter(paragraph => paragraph.includes('Annexure No'))
//         // .map(paragraph => ({
//         //     text: extractText(paragraph),
//         //     dates: extractDates(paragraph)
//         // }));
//         .map(paragraph => extractText(paragraph));

//     res.json({ extractedTexts });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



// //Hiurrah AI
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nlp = require('compromise');

// const app = express();
// const port = 7000;

// app.use(bodyParser.json());

// // Configure CORS to allow requests from http://localhost:3000
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));

// function extractDates(text) {
//     const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
//     return text.match(dateRegex) || [];
// }

// function extractTextBetweenLastSentences(paragraph) {
//     // Check if the paragraph contains "Annexure no."
//     if (!paragraph.toLowerCase().includes('annexure no.')) {
//         return null; // Ignore this paragraph if it does not contain "Annexure no."
//     }

//     // Remove the part of the sentence containing "Annexure no."
//     let cleanedParagraph = paragraph.replace(/(are collectively |is )?being filed and marked as Annexure no\.\s*\d+ to this writ petition\./gi, '').trim();

//     // Tokenize into sentences using NLP
//     let doc = nlp(cleanedParagraph);
//     let sentences = doc.sentences().out('array');

//     if (sentences.length < 2) {
//         return null; // Not enough sentences to extract the desired text
//     }

//     // Extract the second-to-last and last sentences
//     let secondLastSentence = sentences[sentences.length - 2];
//     let lastSentence = sentences[sentences.length - 1];

//     // Extract dates from the second-to-last sentence
//     let dates = extractDates(secondLastSentence);

//     return { secondLastSentence, dates };
// }

// app.post('/extract-text', (req, res) => {
//     const { paragraphs } = req.body;

//     if (!Array.isArray(paragraphs) || paragraphs.some(p => typeof p !== 'string')) {
//         return res.status(400).json({ error: 'Invalid input. Please provide an array of paragraphs as strings.' });
//     }

//     const extractedTexts = paragraphs
//         .map(paragraph => extractTextBetweenLastSentences(paragraph))
//         .filter(result => result !== null)
//         .map(result => ({ text: result.secondLastSentence, dates: result.dates }));

//     res.json({ extractedTexts });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// // Example usage
// let paragraphs = [
//     "That the bail application moved on behalf of applicant and another which has been rejected by Ld. Additional Sessions Judge, Court No. 1, Meerut vide order dated 03.01.2024 without considering the merits and facts of the case of dated 21.03.2024. A certified free copy of Mr. bail rejection order i.e., dated 03.01.2024 provided to applicant is being annexed as Annexure No. 1 with this affidavit."
// ];

// paragraphs.forEach(paragraph => {
//     let extractedText = extractTextBetweenLastSentences(paragraph);
//     if (extractedText) {
//         console.log('Extracted Text:', extractedText.secondLastSentence);
//         console.log('Dates:', extractedText.dates);
//     }
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nlp = require('compromise');

// const app = express();
// const port = 7000;

// app.use(bodyParser.json());

// // Configure CORS to allow requests from http://localhost:3000
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));

// function extractDates(text) {
//     const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
//     return text.match(dateRegex) || [];
// }

// function removeDatesAndDated(text) {
//     const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
//     return text.replace(dateRegex, '').replace(/\bdated\b/g, '').replace(/\s\s+/g, ' ').trim();
// }

// function extractTextBetweenLastSentences(paragraph) {
//     // Check if the paragraph contains "Annexure no."
//     if (!paragraph.toLowerCase().includes('annexure no.')) {
//         return null; // Ignore this paragraph if it does not contain "Annexure no."
//     }

//     // Remove the part of the sentence containing "Annexure no."
//     let cleanedParagraph = paragraph.replace(/(are collectively |is )?being filed and marked as Annexure no\.\s*\d+ to this writ petition\./gi, '').trim();

//     // Tokenize into sentences using NLP
//     let doc = nlp(cleanedParagraph);
//     let sentences = doc.sentences().out('array');

//     if (sentences.length < 2) {
//         return null; // Not enough sentences to extract the desired text
//     }

//     // Extract the second-to-last and last sentences
//     let secondLastSentence = sentences[sentences.length - 2];
//     let lastSentence = sentences[sentences.length - 1];

//     // Extract dates from the second-to-last sentence
//     let dates = extractDates(secondLastSentence);

//     // Remove dates and the word "dated" from the second-to-last sentence
//     let cleanedText = removeDatesAndDated(secondLastSentence);

//     return { cleanedText, dates };
// }

// app.post('/extract-text', (req, res) => {
//     const { paragraphs } = req.body;

//     if (!Array.isArray(paragraphs) || paragraphs.some(p => typeof p !== 'string')) {
//         return res.status(400).json({ error: 'Invalid input. Please provide an array of paragraphs as strings.' });
//     }

//     const extractedTexts = paragraphs
//         .map(paragraph => extractTextBetweenLastSentences(paragraph))
//         .filter(result => result !== null)
//         .map(result => ({ text: result.cleanedText, dates: result.dates }));

//     res.json({ extractedTexts });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// // Example usage
// let paragraphs = [
//     "That the bail application moved on behalf of applicant and another which has been rejected by Ld. Additional Sessions Judge, Court No. 1, Meerut vide order dated 03.01.2024 without considering the merits and facts of the case of dated 21.03.2024. A certified free copy of Mr. bail rejection order i.e., dated 03.01.2024 provided to applicant is being annexed as Annexure No. 1 with this affidavit."
// ];

// paragraphs.forEach(paragraph => {
//     let extractedText = extractTextBetweenLastSentences(paragraph);
//     if (extractedText) {
//         console.log('Extracted Text:', extractedText.cleanedText);
//         console.log('Dates:', extractedText.dates);
//     }
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nlp = require('compromise');

const app = express();
const port = 7000;

app.use(bodyParser.json());

// // Configure CORS to allow requests from http://localhost:3000
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// };
// Configure CORS to allow requests from specified origins
const allowedOrigins = [
    'http://localhost:3000',
    'https://my-doc-converter.vercel.app'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

function extractDates(text) {
    const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
    return text.match(dateRegex) || [];
}

function removeDatesAndPhrases(text) {
    const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
    let cleanedText = text.replace(dateRegex, '')
        .replace(/\bdated\b/g, '')
        .replace(/\s\s+/g, ' ');

    const phrasesToRemove = [
        /is being filed herewith and marked as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /are collectively filed herewith and marked as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /is being annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /is annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /are being annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /are annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which is being filed herewith and marked as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which are collectively being filed herewith and marked as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which are collectively filed herewith and marked as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which is being annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which is annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which are being annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /which are annexed as Annexure No\.\s*\d*\s*(to this affidavit|with this affidavit)?/gi,
        /is being filed herewith and marked as Annexure No\./gi,
        /are collectively being filed herewith and marked as Annexure No\./gi,
        /are collectively filed herewith and marked as Annexure No\./gi,
        /is being annexed as Annexure No\./gi,
        /is annexed as Annexure No\./gi,
        /are being annexed as Annexure No\./gi,
        /are annexed as Annexure No\./gi
    ];

    phrasesToRemove.forEach(pattern => {
        cleanedText = cleanedText.replace(pattern, '');
    });

    return cleanedText.trim();
}

function extractTextBetweenLastSentences(paragraph) {
    // Check if the paragraph contains "Annexure no."
    if (!paragraph.toLowerCase().includes('annexure no.')) {
        return null; // Ignore this paragraph if it does not contain "Annexure no."
    }

    // Remove the part of the sentence containing "Annexure no."
    let cleanedParagraph = paragraph.replace(/(are collectively |is )?being filed and marked as Annexure no\.\s*\d+ to this writ petition\./gi, '').trim();

    // Tokenize into sentences using NLP
    let doc = nlp(cleanedParagraph);
    let sentences = doc.sentences().out('array');

    if (sentences.length < 2) {
        return null; // Not enough sentences to extract the desired text
    }

    // Extract the second-to-last and last sentences
    let secondLastSentence = sentences[sentences.length - 2];
    let lastSentence = sentences[sentences.length - 1];

    // Extract dates from the second-to-last sentence
    let dates = extractDates(secondLastSentence);

    // Remove dates, the word "dated," and specified phrases from the second-to-last sentence
    let cleanedText = removeDatesAndPhrases(secondLastSentence);

    return { cleanedText, dates };
}

app.post('/extract-text', (req, res) => {
    const { paragraphs } = req.body;

    if (!Array.isArray(paragraphs) || paragraphs.some(p => typeof p !== 'string')) {
        return res.status(400).json({ error: 'Invalid input. Please provide an array of paragraphs as strings.' });
    }

    const extractedTexts = paragraphs
        .map(paragraph => extractTextBetweenLastSentences(paragraph))
        .filter(result => result !== null)
        .map(result => ({ text: result.cleanedText, dates: result.dates }));

    res.json({ extractedTexts });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Example usage
let paragraphs = [
    "That the bail application moved on behalf of applicant and another which has been rejected by Ld. Additional Sessions Judge, Court No. 1, Meerut vide order dated 03.01.2024 without considering the merits and facts of the case of dated 21.03.2024. A certified free copy of Mr. bail rejection order i.e., dated 03.01.2024 provided to applicant is being annexed as Annexure No. 1 with this affidavit."
];

paragraphs.forEach(paragraph => {
    let extractedText = extractTextBetweenLastSentences(paragraph);
    if (extractedText) {
        console.log('Extracted Text:', extractedText.cleanedText);
        console.log('Dates:', extractedText.dates);
    }
});
