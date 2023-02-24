const cors = require("cors");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.use("/newarrivals", require("./routes/newArrivalRoutes"));

app.use("/sales", require("./routes/saleRoutes"));

app.use("/trendingnow", require("./routes/trendingNowRoutes"));

app.use("/categories", require("./routes/categoryRoutes"));

app.use("/popularcategories", require("./routes/popularCategoryRoutes"));

app.use("/instagramimages", require("./routes/instagramImageRoutes"));

app.use("/fashionblogs", require("./routes/fashionBlogRoutes"));

app.use("/subsemails", require("./routes/subEmailRoutes"));

app.use("/subsemailswithcats", require("./routes/subEmailWithCatRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
