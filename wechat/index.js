const init = (server) => {
    const io = require("socket.io")(server);
    io.on("connection", (client) => {
      client.on("send-message", (data) => {
        console.log("测试", data);
        client.emit('update-server', data)
        client.broadcast.emit('update-server',data);
      });
      client.on("disconnect", () => {
        /* … */
      });
    });
}

module.exports = init