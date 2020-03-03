import * as Koa from "koa";
import * as Router from "koa-router";
import { Add } from "@demo/add";
import { Subtract } from "@demo/subtract";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
    ctx.body = { msg: "Hello world" };
    await next();
})

router.get("/add", async (ctx, next) => {
    const { a, b } = ctx.request.query;
    ctx.body = { result: Add.calculate(parseInt(a), parseInt(b)) };
    await next();
})

router.get("/subtract", async (ctx, next) => {
    const { a, b } = ctx.request.query;
    ctx.body = { result: Subtract.calculate(parseInt(a), parseInt(b)) };
    await next();
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Server listening on 3000");
});