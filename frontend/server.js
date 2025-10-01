const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

const data = {
    title: "Sample Page",
    description: "This is a test of the backend delivering data to the frontend.",
    image: "data:image/base64",
    links: [
        { text: "Google", url: "https://www.google.com" },
        { text: "GitHub", url: "https://www.github.com" }
    ]
};

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});