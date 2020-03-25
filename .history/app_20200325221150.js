const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 路由
const index = require('./routes/index')
const users = require('./routes/users')

// 中间件
const chine = require('./middleware/object.js')

// mongodb
const mongoose = require('mongoose')
const dbsConfig =  require('./dbs/config')

// redis
const session = require('koa-generic-session')
const redis = require('koa-redis')
// error handler
onerror(app)

// redis session
app.keys = ['keys','keyskeys']
app.use(session({
  key: 'hsy',
  prefix: 'wyx',
  store:new redis()
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 使用中间件
// app.use(chine())

// 连接mongodb数据库
mongoose.connect(dbsConfig.dbs,{
  useNewUrlParser:true,
  useUnifiedTopology: true
})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
