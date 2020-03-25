function chine (ctx) {
    // 区分不同的用户，登录和注册都会用到session
    ctx.session.count++
    global.console.log('pv',ctx.path)
}
module.exports = function () {
    return async function (ctx,next){
        chine(ctx)
        let code
        try {
            global.console.log('chine start')
            await next()
            code =0
            global.console.log('chine end')
        } catch (e) {
            code =1 
        }
        ctx.body = {
            code: code
        }
    }
  
}