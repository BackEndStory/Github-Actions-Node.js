const express = require('express');
const createClient = require("redis");
const PORT = 3000;


//APP 
const app = express();
app.get('/', async (req,res) => {
    
    const CLIENT_BASE_URL = " ubuntu_redis-server_1";

    const client = createClient({
            url: `redis://${CLIENT_BASE_URL}:6379`,
        });
    await client.connect();
    await redisClient.set("1", "이승렬");
   res.send("ok");

});

app.listen(PORT);
console.log("Server is running")