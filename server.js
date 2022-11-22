const express = require('express');
const redis = require("redis");
const PORT = 3000;



//APP 
const app = express();
app.get('/', async (req,res) => {
    /*
    const CLIENT_BASE_URL = "ubuntu_redis-server_1";

    const client = redis.createClient({
           url: `redis://${CLIENT_BASE_URL}:6379`,
        // port:6379
        });
    await client.connect();
    await client.set("1", "이승렬");*/
   res.send("민영아 힘내라? 너 자기개발이나 하자 별 거 없어 낼 볼 수 있으면 보자 자슥아");

});

app.listen(PORT);
console.log("Server is running")