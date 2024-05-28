const latestBlogsRouter = require("../routes/latest_blogs");
const HomeRouter = require("../routes/home");
const AllBlogsRouter = require("../routes/All_blogs");
const signupRouter = require('../routes/signup')
const LoginRouter= require('../routes/Login')
const UserBlogsRouter = require('./user_blogs')
const UserRouter = require('./users')
const UserBlogsContentRouter = require('./user_blog_content')

// Use the routers
const allRoutes = (app) => {
  app.use("/", HomeRouter);
  app.use("/latest-blogs", latestBlogsRouter);
  app.use("/all-blogs", AllBlogsRouter);
  app.use("/sign-up", signupRouter);
  app.use("/users", UserRouter);
  app.use("/login", LoginRouter);
  app.use("/user-blogs", UserBlogsRouter)
  app.use("/user-blogs-content", UserBlogsContentRouter)
};



module.exports = allRoutes;
