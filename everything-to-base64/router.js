/*
 * @Description:
 * @Date: 2022-07-15 11:50:54
 * @FilePath: /Node-Script-Set/everything-to-base64/router.js
 * @LastEditTime: 2022-07-15 14:39:24
 */
const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/base64.html", (req, res) => {
  res.writeHeader(200, {
    "content-type": 'text/html;charset="utf-8"',
  });
  const html = fs.readFileSync(path.resolve(__dirname, "./index.html"));
  res.write(html);
  res.end();
});

module.exports = router;
