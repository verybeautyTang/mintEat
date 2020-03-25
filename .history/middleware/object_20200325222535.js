function chine (ctx) {
    // 区分不同的用户，登录和注册都会用到session
    ctx.session.count++
    global.console.log('pv',ctx.path)
}
module.exports = function () {
    return async function (ctx,next){
        chine(ctx)
        await next()
    }
  
}