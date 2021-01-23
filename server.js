const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`The server has started successfully and is running on port: ${port}`);
})