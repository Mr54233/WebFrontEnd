const fs = require("fs");
const path = require("path");
const http = require("http");

const app = http.createServer();

app.on("request", (req, res) => {
	let url = req.url;
	// 根据请求的的地址拼接出文件所在地址
	let fileName = '';
	let content = "404 Not Found";
    if(url == '/'){
        fileName = path.join(__dirname,'mySite','/index.html')
    } else {
        fileName = path.join(__dirname,'mySite',url)
    }

    fs.readFile(fileName , (err,data)=>{
        if(err){
            console.log('err.message',err.message)
            res.end(content)
        } else{
            res.end(data)
        }
    })

});

app.listen(3000, () => {
	console.log("server run on http://127.0.0.1:3000");
});
