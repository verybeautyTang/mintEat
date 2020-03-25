function m2 (ctx) {
    global.console.log('m2',ctx.path)
}
module.exports = function () {
    return async function (ctx,next){
        m2(ctx)
        let code
        try {
            global.console.log('m2 start')
            await next()
            code =0
            global.console.log('m2 end')
        } catch (e) {
            code =1 
        }
        ctx.body = {
            code: code
        }
    }
  
}