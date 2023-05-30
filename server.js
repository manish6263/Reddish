const express = require('express');
const cors = require('cors');
require('express-async-errors');
require('colors');

const middleware = require('./utils/middleware');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const subredditRoutes = require('./routes/subreddit');
const userRoutes = require('./routes/user');

const { PORT, NODE_ENV } = require('./utils/config');
const connectToDB = require('./db');

const app = express();
connectToDB();

// Using middlewares..
app.use(cors({ origin: '*', methods: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes..
app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/subreddits', subredditRoutes);
app.use('/api/users', userRoutes);

// middlewares..
app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);

// --------------------------deployment------------------------------

if (NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// Starting express app...
app.listen(
  PORT,
  console.log(
    `Server running in ${NODE_ENV} mode on port ${PORT}..`.white
      .bold
  )
);