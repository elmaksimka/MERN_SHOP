const cors = require('cors');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const Category = require('./models/categoryModel');
const NewArrival = require('./models/newArrivalModel');
const PopularCategory = require('./models/popularCategoryModel');
const InstagramImage = require('./models/instagramImageModel');
const FashionBlog = require('./models/fashionBlogModel');
const TrendingNow = require('./models/trendingNowModel');
const Sale = require('./models/saleModel');
const SubEmail = require('./models/subEmailModel');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/categories', (req, res) => {
  Category.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/newarrivals', (req, res) => {
  NewArrival.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/newarrivals/:id', (req, res) => {
  const newArrivalId = req.params.id;

  NewArrival.findById(newArrivalId)
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/popularcategories', (req, res) => {
  PopularCategory.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/instagramimages', (req, res) => {
  InstagramImage.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/fashionblogs', (req, res) => {
  FashionBlog.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/trendingnow', (req, res) => {
  TrendingNow.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/trendingnow/:id', (req, res) => {
  const trendingNowId = req.params.id;

  TrendingNow.findById(trendingNowId)
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/sales', (req, res) => {
  Sale.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/sales/:id', (req, res) => {
  const saleId = req.params.id;

  Sale.findById(saleId)
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get('/subsemails', (req, res) => {
  SubEmail.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post('/subsemails', (req, res) => {
  const { email } = req.body;

  const subEmail = new SubEmail({
    email
  });

  subEmail.save()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));

    res.status(201).json({ email: subEmail });
});

// app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// app.use('/api/categories', require('./routes/categoryRoutes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
