/*
 * @Description: 
 * @Date: 2022-07-15 18:34:35
 * @FilePath: /Node-Script-Set/wechat/router.js
 * @LastEditTime: 2022-07-15 18:47:56
 */

const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.get("/socket.html", (req, res) => {
  res.writeHeader(200, {
    "content-type": 'text/html;charset="utf-8"',
  });
  const html = fs.readFileSync(path.resolve(__dirname, "./index.html"));
  res.write(html);
  res.end();
});

module.exports = router
