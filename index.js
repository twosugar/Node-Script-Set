/*
 * @Description:
 * @Author: twosugar
 * @Date: 2022-07-14 18:40:46
 * @FilePath: /Node-Script-Set/index.js
 * @LastEditTime: 2022-07-15 18:50:32
 */
const express = require('express')
const base64Router = require('./everything-to-base64/router')
const wechat = require('./wechat/router')
const wechatInit = require('./wechat/index')
const app = express()
const logger = require('pino')()

app.use(base64Router)
app.use(wechat)

const server = app.listen(6001, () => {
    logger.info("6001 服务启动成功");
});

wechatInit(server)