// app/controller/messages.js
const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class messageController extends Controller {
    async index() {
        const { ctx } = this;
        const messages = await ctx.model.Message.findAll();
        await ctx.render('index.pug',{ messages });
    }

    async show() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id)
        const message = await ctx.model.Message.findByPk(id);
        await ctx.render('show.pug',{ message });
    }

    async edit() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id)
        const message = await ctx.model.Message.findByPk(id);
        await ctx.render('show.pug',{ message });
    }

    async create() {
        const ctx = this.ctx;
        const { title, content } = ctx.request.body;
        const message = await ctx.model.Message.create({ title, content });
        ctx.redirect('/message')
    }

    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const message = await ctx.model.Message.findByPk(id);
        if (!message) {
            ctx.status = 404;
            return;
        }

        const { name, age } = ctx.request.body;
        await message.update({ name, age });
        ctx.body = message;
    }

    async destroy() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const message = await ctx.model.Message.findByPk(id);
        if (!message) {
            ctx.status = 404;
            return;
        }

        await message.destroy();
        ctx.status = 200;
    }

    async new() {
        const ctx = this.ctx;
        await ctx.render('add.pug');
    }

    async renew() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const message = await ctx.model.Message.findByPk(id);

        const { title, content } = ctx.request.body;
        await message.update({ title, content });
        ctx.redirect('/message')
    }

}


module.exports = messageController;