const express = require('express');

const PORT = 8080;

//APP 
const app = express();
app.get('/', (req,res) => {
    res.send("안녕웡근~ㅋㅋ")
});

app.listen(PORT);
console.log("Server is running")