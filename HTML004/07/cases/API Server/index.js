const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// 挂载中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 挂载路由
app.use("/api/case", require("./routers/casesRouter"));

app.listen(port, () => console.log(`http://localhost:${port}`));
