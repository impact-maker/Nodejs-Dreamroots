const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const files = ['fileA.txt', 'fileB.txt', 'fileC.txt', 'fileD.txt'];

// Create files if they do not exist
function initializeFiles() {
    files.forEach(file => {
        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, '', 'utf8');
        }
    });
}

// Initialize files at the start
initializeFiles();

// Utility function to check if all files have a number
function allFilesHaveNumbers() {
    return files.every(file => fs.readFileSync(file, 'utf8').trim().length > 0);
}

// Root endpoint to provide a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Number Processing API. Use /input to submit a number and /list to view the stored numbers.');
});

// Endpoint to handle user input
app.post('/input', (req, res) => {
    const { number } = req.body;

    if (number < 1 || number > 25) {
        return res.status(400).json({ error: 'Number must be between 1 and 25' });
    }

    const multipliedNumber = number * 7;
    let fileToWrite;

    if (multipliedNumber > 140) {
        fileToWrite = 'fileA.txt';
    } else if (multipliedNumber > 100) {
        fileToWrite = 'fileB.txt';
    } else if (multipliedNumber > 60) {
        fileToWrite = 'fileC.txt';
    } else {
        fileToWrite = 'fileD.txt';
    }

    fs.writeFileSync(fileToWrite, multipliedNumber.toString(), 'utf8');

    if (allFilesHaveNumbers()) {
        return res.status(200).json({ message: 'All files have numbers, process complete' });
    } else {
        return res.status(200).json({ message: 'Number processed' });
    }
});

// Endpoint to list numbers in all files
app.get('/list', (req, res) => {
    const result = files.reduce((acc, file) => {
        acc[file] = fs.readFileSync(file, 'utf8').trim();
        return acc;
    }, {});

    res.status(200).json(result);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
