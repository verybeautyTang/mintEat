const router = require('koa-router')()
const Person = require('./../dbs/models/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  global.console.log('2234252')
  ctx.body = 'this is a users/bar response4444'
})
router.post('/person', async (ctx) => {
  global.console.log('222')
  const person = new Person({
    name : ctx.requst.body.name,
    age : ctx.requst.body.age
  })
  let code 
  try {
    // 存进数据库
    await person.save()
    code  = 0
  } catch (e) {
    code  = 1
  }
  ctx.body ={
    code:code
  }
})

module.exports = router
