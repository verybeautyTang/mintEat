const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/testAsync', async(next)=>{
  global.console.log('testAsync',new Date())
  const a  = new Promise((resolve, reject) =>{
    setTimeout(() => {
      this.body = 'this is a users/bar response!';
      global.console.log('start s',new Date())
      resolve('ab')
    }, 1000);
  })
  next.body={
    a
  }
})
module.exports = router
