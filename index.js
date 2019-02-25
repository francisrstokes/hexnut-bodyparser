module.exports = {
  json: (opts = {}) => {
    const {
      strictParsing = false
    } = opts;

    return async (ctx, next) => {
      if (ctx.type === 'message' && ctx.message) {
        try {
          ctx.message = JSON.parse(ctx.message.trim());
        } catch (ex) {
          if (strictParsing) throw ex;
        }
      }
      return await next();
    }
  }
};
