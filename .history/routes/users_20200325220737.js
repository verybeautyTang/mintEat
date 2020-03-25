const router = require('koa-router')()

const Person = require('./../dbs/models/person')

router.prefix('/users')

// session
const Redis = require('koa-redis')
const Store =  new Redis().client

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  global.console.log('2234252')
  ctx.body = '我为什么运行不起来'
})

// router.get('/fix',async function (ctx,next) {
//   const st = await Store.hset('fix','name',Math.random)
//   ctx.body = {
//     code:0
//   }
// })

router.post('/addperson', async function (ctx) {
  const person = new Person({
    name : ctx.request.body.name,
    age : ctx.request.body.age
  })
  let code ；
  try {
    // 存进数据库
    await person.save()
    code  = 0
  } 
  catch (e) {
    console.log(e)
    code = 1
  }
  ctx.body ={
    code:code
  }
})

module.exports = router
