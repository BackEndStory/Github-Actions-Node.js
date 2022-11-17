const express = require('express');

const PORT = 3000;

//APP 
const app = express();
app.get('/', (req,res) => {
    res.send("안녕민경 뭐행?ㅋㅋㅋㅋ어댜")
});

app.listen(PORT);
console.log("Server is running")