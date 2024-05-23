const latestBlogsRouter = require("../routes/latest_blogs");
const HomeRouter = require("../routes/home");
const AllBlogsRouter = require("../routes/All_blogs");

// Use the routers
const allRoutes = (app) => {
  app.use("/", HomeRouter);
  app.use("/latest-blogs", latestBlogsRouter);
  app.use("/all-blogs", AllBlogsRouter);
};

module.exports = allRoutes;
