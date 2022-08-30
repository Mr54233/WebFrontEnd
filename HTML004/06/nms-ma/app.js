const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use('/api/category',require('./routes/category'));

server.listen(3000,()=>{
    console.log('服务器运行在 http://localhost:3000');
})