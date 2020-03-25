function m3 (ctx) {
    global.console.log('m3',ctx.path)
}
module.exports = function () {
    return async function (ctx,next){
        m3(ctx)
        let code
        try {
            global.console.log('me start')
            await next()
            code =0
            global.console.log('m3 end')
        } catch (e) {
            code =1 
        }
        ctx.body = {
            code: code
        }
    }
  
}