module.exports = {
  json: () => async (ctx, next) => {
    if (ctx.type === 'message' && ctx.message) {
      ctx.message = JSON.parse(ctx.message.trim());
    }
    return await next();
  }
};
