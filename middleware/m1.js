function chine1 (ctx) {
    global.console.log('chine1',ctx.path)
}
module.exports = function () {
    return async function (ctx,next){
        chine1(ctx)
        let code
        try {
            global.console.log('m1 start')
            await next()
            code =0
            global.console.log('m1 end')
        } catch (e) {
            code =1 
        }
        ctx.body = {
            code: code
        }
    }
  
}