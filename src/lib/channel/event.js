const { ipcMain } = require('electron')
const redis = require('../redis/index.js')
const singal = require('../redis/singal.js')
// 异步
// ipcMain.on('asynchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.reply('asynchronous-reply', 'pong')
// })
// 同步
// event.returnValue = 'fail'


// 渲染进程通知新建连接(同步)
ipcMain.on('initConnect', async (event, conf) => {
  /**
   * conf
   * {time: '1596697213288', address: '127.0.0.1', port: 8080, passwd: '123'}
  */
  const code = await redis.connection(conf)
  event.reply('conection-notify', { time: conf.time, code })
})
// 渲染进程通知关闭连接(异步)
ipcMain.on('closeConnect', (event, time) => {
  redis.disconnect(time)
})
