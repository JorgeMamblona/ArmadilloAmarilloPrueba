module.exports = app => {

  const authRoutes = require('./auth.routes')
  app.use("/api/auth", authRoutes)

  const moviesRoutes = require("./movies.routes")
  app.use("/api/movies", moviesRoutes)

}