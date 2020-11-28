const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

let port = process.env.PORT || 3000
let version = process.env.version || "latest"
let lastcommitsha = process.env.lastcommitsha || "abc57858585"

app.get('/version', (req, res) => {
    res.send({
        "myapplication": [{
            "version": `${version}`,
            "lastcommitsha": `${lastcommitsha}`,
            "description": "pre-interview technical test"
        }]
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})