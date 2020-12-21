export default (ctx: any, done: any) => {
    ctx.expect("hello").to.equal("hello")
    done()
}