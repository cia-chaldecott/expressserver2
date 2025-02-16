const express = require('express');
const app = express();
const port = 3000; // Choose a port for your server

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
