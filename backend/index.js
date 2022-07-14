const { registerRouter } = require('./router')

export const registerRoutesPlugin = {
  name: 'register-routes',
  configureServer(server) {
    registerRouter(server.middlewares)
  },
}
