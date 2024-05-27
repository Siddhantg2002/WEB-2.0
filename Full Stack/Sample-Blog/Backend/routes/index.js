const latestBlogsRouter = require("../routes/latest_blogs");
const HomeRouter = require("../routes/home");
const AllBlogsRouter = require("../routes/All_blogs");
const signupRouter = require('../routes/signup')
const LoginRouter= require('../routes/Login')
const UserBlogsRouter = require('../routes/user_blogs')

// Use the routers
const allRoutes = (app) => {
  app.use("/", HomeRouter);
  app.use("/latest-blogs", latestBlogsRouter);
  app.use("/all-blogs", AllBlogsRouter);
  app.use("/sign-up", signupRouter);
  app.use("/login", LoginRouter);
  app.use("/user-blogs", UserBlogsRouter)
};



module.exports = allRoutes;
